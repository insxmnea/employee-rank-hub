import { $api } from "@shared/config/api";
import { Employee } from "../model/types";

type getEmployeesRankDto = Employee[];

export const getEmployeesRank = async () => {
  return $api.get<getEmployeesRankDto>("/employee/rank");
};
