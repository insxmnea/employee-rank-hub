import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.scss";
import { AppLink } from "@shared/ui/AppLink";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import { RoutePath } from "@shared/config/routeConfig";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className={classnames(styles.navbar)}>
      <ThemeSwitcher />
      <div className={classnames(styles.links)}>
        <AppLink to={RoutePath.main}>Main page</AppLink>
        <AppLink to={RoutePath.about}>About page</AppLink>
      </div>
    </div>
  );
};
