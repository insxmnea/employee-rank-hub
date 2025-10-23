import { useTheme } from "@app/providers/theme";
import * as styles from "./ThemeSwitcher.module.scss";
import { classnames } from "@shared/lib/classnames";
import { Button } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      className={classnames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {t("Switch theme")}
    </Button>
  );
};
