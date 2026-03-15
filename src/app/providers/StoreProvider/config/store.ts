import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@entities/counter";
import { userReducer } from "@entities/user";
import { loginReducer } from "@features/auth-by-username";
import { $api } from "@shared/config/api";
import { NavigateOptions, To } from "react-router";

export function createReduxStore(
  initialState?: StateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });
}

export type AppStore = ReturnType<typeof createReduxStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
