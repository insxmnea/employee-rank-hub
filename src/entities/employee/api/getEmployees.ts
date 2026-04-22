import { $api } from "@shared/config/api";
import { Employee } from "../model/types";

type getEmployeesDto = Employee[];

export const getEmployees = async () => {
  return $api.get<getEmployeesDto>("/employee");
};
