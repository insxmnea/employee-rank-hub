import { $api } from "@shared/config/api";
import { Recommendation } from "../model/types";

type getRecommendationDto = Recommendation;

export const getRecommendation = async (employeeId: number) => {
  return $api.get<getRecommendationDto>(`/recommendation/${employeeId}`);
};
