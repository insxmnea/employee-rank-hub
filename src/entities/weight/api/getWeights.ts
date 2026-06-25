import { $api } from "@shared/config/api";
import { Weights } from "../model/types";

type getWeightsDto = Weights;

export const getWeights = async () => {
  return $api.get<getWeightsDto>("/weights");
};
