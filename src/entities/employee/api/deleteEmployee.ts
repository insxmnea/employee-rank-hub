import { $api } from "@shared/config/api";

export const deleteEmployee = async (id: string) => {
  return $api.delete<void>(`/employee/${id}`);
};
