import { queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./getEmployees";

export const employeeQueries = {
  all: () => ["employees"],

  allEmployees: () =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "all"],
      queryFn: () => getEmployees(),
    }),

  employee: (id: number) =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "subdivision", id],
      queryFn: () => {},
    }),
};
