import { redirect } from "next/navigation";

// Force dynamic rendering to avoid SSG issues with client components
export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  redirect("/user/profile");
}
