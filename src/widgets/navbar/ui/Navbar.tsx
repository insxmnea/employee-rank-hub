import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.scss";
import { AppLink } from "@shared/ui/AppLink";
import { RoutePath } from "@shared/config/routeConfig";
import { useTranslation } from "react-i18next";

interface Props {}

export const Navbar = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className={classnames(styles.navbar)}>
      <div className={classnames(styles.links)}>
        <AppLink to={RoutePath.main}>{t("Main page")}</AppLink>
        <AppLink to={RoutePath.about}>{t("About page")}</AppLink>
      </div>
    </div>
  );
};
