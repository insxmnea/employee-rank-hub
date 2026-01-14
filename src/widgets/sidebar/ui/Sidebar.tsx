import { classnames } from "@shared/lib/classnames";
import * as styles from "./Sidebar.module.scss";
import { useState } from "react";
import { Button } from "@shared/ui/Button";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import { LanguageSwitcher } from "@widgets/language-switcher";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classnames(styles.Sidebar, { [styles.collapsed]: collapsed })}
    >
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Button onClick={onToggle}>{t("collapse sidebar")}</Button>
    </div>
  );
};
