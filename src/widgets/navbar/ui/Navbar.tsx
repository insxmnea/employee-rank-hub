import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.scss";
import { AppLink } from "@shared/ui/AppLink";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className={classnames(styles.navbar)}>
      <div className={classnames(styles.links)}>
        <AppLink to={"/"}>Main page</AppLink>
        <AppLink to={"/about"}>About page</AppLink>
      </div>
    </div>
  );
};
