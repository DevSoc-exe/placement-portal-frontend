import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  withCredentials: true,
});

export const auth_api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  withCredentials: true,
});

let isRefreshing = false; // Flag to indicate whether a token refresh is in progress
let failedQueue: any[] = []; // Queue to hold requests while the token is being refreshed

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

auth_api.interceptors.response.use(
  (response) => {
    const newXcsrfToken = response.headers["x-csrf-token"];
    if (newXcsrfToken) {
      localStorage.setItem("x-csrf-token", newXcsrfToken);
      auth_api.defaults.headers["x-csrf-token"] = newXcsrfToken;
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the response status is 406, we need to refresh the token
    if (error.response.status === 406) {
      if (!isRefreshing) {
        isRefreshing = true;
        // Try to refresh the token
        try {
          const response = await auth_api.get("/refresh");
          const newXcsrfToken = response.headers["x-csrf-token"];
          if (newXcsrfToken) {
            localStorage.setItem("x-csrf-token", newXcsrfToken);
            auth_api.defaults.headers["x-csrf-token"] = newXcsrfToken;
          }
          processQueue(null, newXcsrfToken);
        } catch (refreshError) {
          console.log("Refresh token error", refreshError);
          processQueue(refreshError, null);

          toast("Please login to continue");
          if (typeof window !== "undefined") {
            window.location.href = "/auth/login";
          }

          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers["x-csrf-token"] = token;
        return auth_api(originalRequest);
      });
    }

    // Handle other errors
    if (error.response.status === 401 || error.response.status === 400) {
      toast("Please login to continue");
      console.log("Please login to continue");
    } else if (error.response.status === 500) {
      toast.error("Oops! Something went wrong");
    }

    return Promise.reject(error);
  }
);
