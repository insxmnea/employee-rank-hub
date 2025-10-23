import { useTranslation } from "react-i18next";
import * as styles from "./LanguageSwitcher.module.scss";
import { Button } from "@shared/ui/Button";

interface LanguageSwitcherProps {}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return <Button onClick={handleClick}>{t("LanguageSwitcher")}</Button>;
};
