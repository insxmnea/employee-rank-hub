import { useTranslation } from "react-i18next";
import * as styles from "./LoginForm.module.css";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/input";
import { memo, useCallback, useState } from "react";
import { useAuthLogin } from "@features/auth-by-username/api/useAuthLogin";

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, error, isPending } = useAuthLogin();

  const onLoginClick = useCallback(() => {
    mutate({ username, password });
  }, [mutate, password, username]);

  return (
    <div className={styles.loginForm}>
      {!!error && <div>{t("Неверный логин или пароль")}</div>}

      <Input
        value={username}
        placeholder="Имя"
        onChange={(value) => setUsername(value)}
        autofocus
      />
      <Input
        value={password}
        placeholder="Пароль"
        onChange={(value) => setPassword(value)}
      />
      <Button
        className={styles.loginForm__button}
        onClick={onLoginClick}
        disabled={isPending}
      >
        {t("Вход")}
      </Button>
    </div>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
