import { classnames } from "@shared/lib/classnames";
import * as styles from "./Sidebar.module.css";
import { useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import { LanguageSwitcher } from "@widgets/language-switcher";
import { useTranslation } from "react-i18next";
import { ButtonSize } from "@shared/ui/Button/ui/Button";
import { AppLink } from "@shared/ui/AppLink";
import { RoutePath } from "@shared/config/routeConfig";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classnames(styles.Sidebar, { [styles.collapsed]: collapsed })}
    >
      <div className={styles.links}>
        <AppLink to={RoutePath.main} className={styles.link}>
          <i className="nf nf-fa-home"></i>
          <span className={styles.linkText}>{t("Main page")}</span>
        </AppLink>
        <AppLink to={RoutePath.rank} className={styles.link}>
          <i className="nf nf-md-family_tree"></i>
          <span className={styles.linkText}>{t("Rank page")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={styles.link}>
          <i className="nf nf-md-information_outline"></i>
          <span className={styles.linkText}>{t("About page")}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
      <Button
        className={styles.collapseBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {/* {t("collapse sidebar")} */}
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};
