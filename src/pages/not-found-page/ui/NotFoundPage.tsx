import { useTranslation } from "react-i18next";
import * as styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation("not-found");

  return <div className={styles.NotFoundPage}>{t("Page not found")}</div>;
};
