import { FC } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router";
import { ROUTES } from "src/app/router";

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      {/* <NavLink to={ROUTES.HOMEPAGE}>
        <i className="nf nf-fa-home"></i> Home
      </NavLink> */}
      <NavLink to={ROUTES.RANKINGPAGE}>
        <i className="nf nf-md-family_tree"></i> Ranking
      </NavLink>
      {/* <NavLink to={ROUTES.CRITERIASETTINGSPAGE}>
        <i className="nf nf-seti-settings"></i> Criteria settings
      </NavLink>
      <NavLink to={ROUTES.SCENARIOCOMPARISONPAGE}>
        <i className="nf nf-md-compare_horizontal"></i> Scenario comparison
      </NavLink> */}
    </header>
  );
};
