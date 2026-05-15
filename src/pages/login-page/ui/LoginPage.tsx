import { useAuthStore } from "@entities/auth";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import styles from "./LoginPage.module.css";
import { LoginForm } from "@features/auth-by-username";
import { Text } from "@shared/ui/text";

const LoginPage: FC = () => {
  const { t } = useTranslation("");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles["login-form"]}>
        <Text size="l" centered>
          {t("Авторизация")}
        </Text>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
