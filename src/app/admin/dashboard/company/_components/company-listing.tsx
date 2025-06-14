import { Product } from "@/constants/data";
import { fakeProducts } from "@/constants/mock-api";
import { searchParamsCache } from "@/lib/searchparams";
import { DataTable as ProductTable } from "@/components/ui/table/data-table";
import { columns } from "./product-tables/columns";
import { api } from "@/lib/api";

type CompanyListingPage = {};

export default async function CompanyListingPage({}: CompanyListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get("page");
  const search = searchParamsCache.get("q");
  const pageLimit = searchParamsCache.get("limit");

  // const filters = {
  //   page,
  //   limit: pageLimit,
  //   ...(search && { search }),
  //   ...(categories && { categories: categories }),
  // };

  let data;
  try {
    const base = "/company";
    let url = base;
    if (page > 1) {
      if (url === base) {
        url += "?page=" + page;
      } else {
        url += "&page=" + page;
      }
    }

    if (search) {
      if (url === base) {
        url += "?q=" + search;
      } else {
        url += "&q=" + search;
      }
    }

    data = await api.get(url);
  } catch (error) {
    console.log(error);
  }

  if (data == undefined) return null;
  console.log(data.data);
  // const data = await fakeProducts.getProducts(filters);
  const totalProducts = data.data.total_companies
    ? data.data.total_companies
    : 0;
  const products: Product[] = data.data.companies ? data.data.companies : [];

  return (
    <ProductTable
      columns={columns}
      data={products}
      totalItems={totalProducts}
    />
  );
}
