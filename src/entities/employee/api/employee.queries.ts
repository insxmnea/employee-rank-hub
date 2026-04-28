import { queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./getEmployees";
import { getEmployee } from "./getEmployee";

export const employeeQueries = {
  all: () => ["employees"],

  allEmployees: () =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "all"],
      queryFn: () => getEmployees(),
    }),

  employee: (id: number) =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "employee", id],
      queryFn: () => getEmployee(id),
    }),
};
