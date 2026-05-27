import { TopEmployeeChart } from "@widgets/top-employee-chart/ui/TopEmployeeChart";
import { TotalEmployeeCount } from "@widgets/total-employee-count";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./MainPage.module.css";

const MainPage: FC = () => {
  const { t } = useTranslation("main");

  return (
    <>
      {/* <div>{t("Main page")}</div>
      <TopEmployeeChart /> */}

      <div className={styles.widgets}>
        <TotalEmployeeCount />
        <TopEmployeeChart />
      </div>
    </>
  );
};

export default MainPage;
