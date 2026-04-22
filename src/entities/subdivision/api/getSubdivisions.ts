import { $api } from "@shared/config/api";
import { Subdivisions } from "../model/types";

type getSubdivisionsDto = Subdivisions;

export const getSubdivisions = async () => {
  return $api.get<getSubdivisionsDto>("/subdivision");
};
