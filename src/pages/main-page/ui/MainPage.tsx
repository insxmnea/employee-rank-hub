import { $api } from "@shared/config/api";
import { Button } from "@shared/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { TopEmployeeChart } from "@widgets/top-employee-chart/ui/TopEmployeeChart";
import { TotalEmployeeCount } from "@widgets/total-employee-count";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const { t } = useTranslation("main");

  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ["assessment"],
  //   queryFn: () => {
  //     return $api.get("/subdivision");
  //   },
  //   enabled: false,
  // });

  // console.log(data?.data);

  // const onLoginClick = useCallback(() => {
  //   refetch();
  // }, [refetch]);

  return (
    <>
      <div>{t("Main page")}</div>
      <TopEmployeeChart />

      <TotalEmployeeCount />

      {/* <Button onClick={onLoginClick} disabled={isLoading}>
        {t("Вход")}
      </Button> */}
    </>
  );
};

export default MainPage;
