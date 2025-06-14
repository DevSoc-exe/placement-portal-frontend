"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Drive>[] = [
  {
    accessorKey: "name",
    header: "Company Name",
  },
  {
    accessorKey: "drive_date",
    header: "Date of Drive",
    cell(props) {
      return new Date(props.getValue() as string).toDateString();
    }
  },
  {
    accessorKey: "deadline",
    header: "Last Date to Apply",
    cell(props) {
      return new Date(props.getValue() as string).toUTCString().slice(0, 22);
    },
  },
  {
    accessorKey: "min_cgpa",
    header: "Minimum CGPA",
  },
  {
    accessorKey: "roles",
    header: "Roles",
    cell(props) {
      let roles = props.getValue() as Role[];
      return roles.map((role: Role) => role.title + " ");
    },
  },
  {
    accessorKey: "roles",
    header: "Salary",
    cell(props) {
      let roles = props.getValue() as Role[];
      return roles.map(
        (role: Role) => role.salary_low + " - " + role.salary_high + " LPA"
      );
    },
  },
  {
    accessorKey: "drive_type",
    header: "Drive Location",
  },
  {
    accessorKey: "location",
    header: "Job Location",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
