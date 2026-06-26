import { $api } from "@shared/config/api";
import { Subdivision } from "../model/types";

export interface CreateSubdivision {
  name: string;
  idTopSubdivision?: string;
}

export const createSubdivision = async (data: CreateSubdivision) => {
  return $api.post<Subdivision>("/subdivision", data);
};
