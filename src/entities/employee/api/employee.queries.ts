import { queryOptions } from "@tanstack/react-query";
import { getEmployees } from "./getEmployees";
import { getEmployee } from "./getEmployee";
import { getEmployeesRank } from "./getEmployeesRank";

export const employeeQueries = {
  all: () => ["employees"],

  allEmployees: () =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "all"],
      queryFn: () => getEmployees(),
      staleTime: 0,
    }),

  employee: (id: number) =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "employee", id],
      queryFn: () => getEmployee(id),
      staleTime: 0,
    }),

  employeesRank: () =>
    queryOptions({
      queryKey: [...employeeQueries.all(), "employeesRank"],
      queryFn: () => getEmployeesRank(),
      staleTime: 0,
    }),
};
