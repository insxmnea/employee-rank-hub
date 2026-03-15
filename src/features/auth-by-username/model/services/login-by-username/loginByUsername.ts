import { ThunkConfig } from "@app/providers/StoreProvider";
import { User, userActions } from "@entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<User>("/login", authData);

    if (!response.data) throw new Error();

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.error(e);
    return thunkAPI.rejectWithValue("error");
  }
});
