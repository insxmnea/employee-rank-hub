import { $api } from "@shared/config/api";
import { Subdivision } from "../model/types";

type getSubdivisionDto = Subdivision;

export const getSubdivision = async (id: number) => {
  return $api.get<getSubdivisionDto>(`/subdivision/${id}`);
};
