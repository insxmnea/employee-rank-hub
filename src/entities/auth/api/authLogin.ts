import { $api } from "@shared/config/api";
import { AuthLoginDto } from "./dto/authLoginDto";

interface AuthLogin {
  username: string;
  password: string;
}

export const authLogin = async (authData: AuthLogin) => {
  return $api.post<AuthLoginDto>("/auth/login", authData);
};
