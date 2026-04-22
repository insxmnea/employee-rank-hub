import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { LoginModal } from "@features/auth-by-username";
import { useAuthStore } from "@entities/auth";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (isAuthenticated) {
    return (
      <div className={classnames(styles.navbar)}>
        <Button
          className={classnames(styles.links)}
          theme={ButtonTheme.CLEAR}
          onClick={onLogout}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classnames(styles.navbar)}>
      <Button
        className={classnames(styles.links)}
        theme={ButtonTheme.CLEAR}
        onClick={onOpenModal}
      >
        {t("Войти")}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
