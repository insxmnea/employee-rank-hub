import { $api } from "@shared/config/api";
import { GetProfileDto } from "./dto/getProfileDto";

export const getProfile = async () => {
  return $api.get<GetProfileDto>("/auth/profile");
};
