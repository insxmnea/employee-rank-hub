import { $api } from "@shared/config/api";

export const deleteSubdivision = async (id: string) => {
  return $api.delete<void>(`/subdivision/${id}`);
};
