import { searchParamsCache } from "@/lib/searchparams";
import { SearchParams } from "nuqs/parsers";
import React from "react";
import EmployeeListingPage from "./_components/student-listing-page";

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: "Dashboard : Students",
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <EmployeeListingPage />;
}
