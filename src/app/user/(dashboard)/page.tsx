"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Force dynamic rendering to avoid SSG issues with client components
export const dynamic = 'force-dynamic';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/user/overview");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to dashboard...</p>
      </div>
    </div>
  );
}
