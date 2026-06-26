import { $api } from "@shared/config/api";
import { Subdivision } from "../model/types";

export interface UpdateSubdivision {
  id: string;
  name?: string;
  idTopSubdivision?: string | null;
}

export const updateSubdivision = async (data: UpdateSubdivision) => {
  return $api.put<Subdivision>(`/subdivision/${data.id}`, data);
};
