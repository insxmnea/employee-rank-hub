import { useTheme } from "@app/providers/theme";
import * as styles from "./ThemeSwitcher.module.css";
import { classnames } from "@shared/lib/classnames";
import { Button } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Theme } from "@app/providers/theme/lib/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const iconName = theme === Theme.LIGHT ? "nf-oct-moon" : "nf-oct-sun";

  return (
    <Button
      className={classnames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme="clear"
      title={t("Switch theme")}
    >
      <i className={`nf ${iconName}`}></i>
    </Button>
  );
};
