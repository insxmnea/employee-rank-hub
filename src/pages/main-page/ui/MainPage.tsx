import { Counter } from "@entities/counter";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <Counter />
      <div>{t("Main page")}</div>
    </>
  );
};

export default MainPage;
