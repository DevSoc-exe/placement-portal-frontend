import UserSidebar from "@/components/layout/UserSidebar";
import type { Metadata } from "next";

// Force dynamic rendering to avoid SSG issues with client components
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "User Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserSidebar>{children}</UserSidebar>
    </>
  );
}
