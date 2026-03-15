import { CounterSchema } from "@entities/counter";
import { UserSchema } from "@entities/user";
import { LoginSchema } from "@features/auth-by-username";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
}
