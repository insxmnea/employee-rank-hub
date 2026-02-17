import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "@shared/ui/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classnames(styles.navbar)}>
      <Button
        className={classnames(styles.links)}
        theme={ButtonTheme.CLEAR}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t("Контент модального окна")}
      </Modal>
    </div>
  );
};
