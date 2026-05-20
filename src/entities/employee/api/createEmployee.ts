import { $api } from "@shared/config/api";
import { Employee } from "../model/types";

export interface CreateEmployee {
  firstName: string;
  lastName: string;
  patronymic?: string;
  birthday?: string;
  profession?: string;
  gender: "male" | "female";
  role?: "Junior" | "Middle" | "Senior";
  subdivisionId?: number;
}

export const createEmployee = async (data: CreateEmployee) => {
  return $api.post<Employee>("/employee", data);
};
