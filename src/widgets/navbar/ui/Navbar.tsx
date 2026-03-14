import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { LoginModal } from "@features/auth-by-username";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

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
