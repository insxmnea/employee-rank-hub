import { useTranslation } from "react-i18next";
import * as styles from "./LoginForm.module.scss";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/input";

interface LoginFormProps {}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.loginForm}>
      <Input placeholder="Имя" autofocus />
      <Input placeholder="Пароль" />
      <Button className={styles.loginForm__button}>{t("Вход")}</Button>
    </div>
  );
};
