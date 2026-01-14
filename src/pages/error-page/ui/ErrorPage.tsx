import { useTranslation } from "react-i18next";
import * as styles from "./ErrorPage.module.scss";
import { Button } from "@shared/ui/Button";

export const ErrorPage = () => {
  const { t } = useTranslation("error-page");

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={styles.ErrorPage}>
      {t("An unexpected error has occurred")}
      <Button onClick={reloadPage}>{t("Refresh page")}</Button>
    </div>
  );
};
