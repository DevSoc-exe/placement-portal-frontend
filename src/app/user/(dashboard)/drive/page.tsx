import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { searchParamsCache, serialize } from "@/lib/searchparams";
import { SearchParams } from "nuqs/parsers";
import { Suspense } from "react";
import ProductTableAction from "../company/_components/product-tables/product-table-action";
import DriveListingPage from "./_components/drive-listing-page";

export const metadata = {
  title: "Dashboard: Products",
};

type pageProps = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: pageProps) {
  searchParamsCache.parse(searchParams);
  const key = serialize({ ...searchParams });

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Placement Drives"
            description="View all Placement Drives and opportunities here."
          />
        </div>
        <Separator />
        <ProductTableAction />
        <Suspense
                  key={key}
                  fallback={<DataTableSkeleton columnCount={7} rowCount={10} />}
                >
                  <DriveListingPage />
                </Suspense>
      </div>
    </PageContainer>
  );
}
