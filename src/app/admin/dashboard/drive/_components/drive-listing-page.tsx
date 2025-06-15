"use client";

import { DataTable } from "@/components/ui/table/data-table";
import { auth_api } from "@/lib/api";
import { useEffect, useState } from "react";
import { columns } from "./columns";

type DriveListingPage = {};

export default function DriveListingPage({ }: DriveListingPage) {
  const [drives, setDrives] = useState<Drive[]>();
  const [totalDrives, setTotalDrives] = useState();

  // const filters = {
  //   page,
  //   limit: pageLimit,
  //   ...(search && { search }),
  //   ...(categories && { categories: categories }),
  // };
  useEffect(() => {
    async function GetDrives() {
      let data;
      try {
        const baseUrl = "/drives";
        data = await auth_api.get(baseUrl);
        if (data == undefined) return null;
        const totalDrives = data.data.total_drives ? data.data.total_drives : 0;
        setTotalDrives(totalDrives);
        const drives: Drive[] = data.data.drives ? data.data.drives : [];
        setDrives(drives);
      } catch (error) {
        console.log(error);
      }
    }

    GetDrives();
  }, []);

  if (!drives) return <DataTable columns={columns} data={[]} totalItems={0} />;

  return (
    <DataTable columns={columns} data={drives} totalItems={totalDrives || 0} />
  );
}
