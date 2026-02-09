import { classnames } from "@shared/lib/classnames";
import * as styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={classnames(styles.navbar)}>
      <div className={classnames(styles.links)}>/</div>
    </div>
  );
};
