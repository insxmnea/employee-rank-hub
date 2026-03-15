import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@entities/counter";
import { userReducer } from "@entities/user";
import { loginReducer } from "@features/auth-by-username";

export const store = configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  },
  devTools: __IS_DEV__,
  // preloadedState: initialState,
});

// export function createReduxStore(initialState?: StateSchema) {
//   const rootReducers: ReducersMapObject<StateSchema> = {
//     counter: counterReducer,
//     user: userReducer,
//     loginForm: loginReducer,
//   };

//   return configureStore<StateSchema>({
//     reducer: rootReducers,
//     devTools: __IS_DEV__,
//     preloadedState: initialState,
//   });
// }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
