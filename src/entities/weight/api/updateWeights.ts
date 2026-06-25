import { $api } from "@shared/config/api";

export interface UpdateWeights {
  speedWeight: number;
  informationWeight: number;
  qualityWorkWeight: number;
  resultWorkWeight: number;
  teamWorkWeight: number;
  respectWeight: number;
}

export const updateWeights = async (data: UpdateWeights) => {
  return $api.put<void>("/weights", data);
};
