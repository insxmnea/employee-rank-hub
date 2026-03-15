import { useTranslation } from "react-i18next";
import * as styles from "./LoginForm.module.scss";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/input";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/login-by-username/loginByUsername";
import {
  useAppDispatch,
  useAppSelector,
} from "@app/providers/StoreProvider/config/hooks";

interface LoginFormProps {}

export const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } =
    useAppSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={styles.loginForm}>
      {!!error && <div>{t("Неверный логин или пароль")}</div>}

      <Input
        value={username}
        placeholder="Имя"
        onChange={onChangeUsername}
        autofocus
      />
      <Input
        value={password}
        placeholder="Пароль"
        onChange={onChangePassword}
      />
      <Button
        className={styles.loginForm__button}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Вход")}
      </Button>
    </div>
  );
});

LoginForm.displayName = "LoginForm";
