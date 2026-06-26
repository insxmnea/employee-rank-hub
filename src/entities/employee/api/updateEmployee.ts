import { $api } from "@shared/config/api";
import { Employee } from "../model/types";

export interface UpdateEmployee {
  id: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  birthday?: string;
  profession?: string;
  gender?: "male" | "female";
  role?: "Junior" | "Middle" | "Senior";
  subdivisionId?: number | null;
}

export const updateEmployee = async (data: UpdateEmployee) => {
  return $api.put<Employee>(`/employee/${data.id}`, data);
};
