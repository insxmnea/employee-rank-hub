import { useTheme } from "@app/providers/theme";
import * as styles from "./ThemeSwitcher.module.scss";
import { classnames } from "@shared/lib/classnames";
import { Button } from "@shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classnames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Switch theme
    </Button>
  );
};
