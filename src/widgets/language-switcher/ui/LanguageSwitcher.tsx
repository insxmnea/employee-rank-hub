import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@shared/ui/Button";

interface LanguageSwitcherProps {
  short?: boolean;
}

export const LanguageSwitcher = ({ short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button onClick={handleClick} theme={ButtonTheme.OUTLINE}>
      {t(short ? "ShortLanguage" : "LanguageSwitcher")}
    </Button>
  );
};
