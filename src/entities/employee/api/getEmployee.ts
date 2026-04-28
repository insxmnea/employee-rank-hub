import { $api } from "@shared/config/api";
import { Employee } from "../model/types";

type getEmployeeDto = Employee;

export const getEmployee = async (id: number) => {
  return $api.get<getEmployeeDto>(`/employee/${id}`);
};
