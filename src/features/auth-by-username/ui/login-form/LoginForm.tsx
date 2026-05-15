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
      <Input
        value={username}
        placeholder="Логин"
        onChange={(value) => setUsername(value)}
        error={!!error}
        autofocus
      />
      <Input
        value={password}
        placeholder="Пароль"
        type="password"
        onChange={(value) => setPassword(value)}
        error={!!error}
      />

      {!!error && (
        <div className={styles.error__text}>
          {t("Неверный логин или пароль")}
        </div>
      )}

      <Button
        className={styles.loginForm__button}
        onClick={onLoginClick}
        disabled={isPending}
      >
        {t("Вход")}
      </Button>
      <a
        className={styles.password_recovery}
        href="mailto:info@://example.com письма&body=Запрос на восстановление пароля"
      >
        {t("Забыли пароль?")} <i className="nf nf-oct-mail"></i>
      </a>
    </div>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
