import { EmployeeTable } from "@features/employee-table";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import styles from "./EmployeeTablePage.module.css";
import { UpdateWeightsForm } from "@features/update-weights";
import { useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";

const EmployeeTablePage = () => {
  const { t } = useTranslation();
  const [isShowWeights, setIsShowWeights] = useState(false);

  return (
    <div>
      <Text size="l" centered className={styles.header}>
        {t("Сотрудники")}
      </Text>

      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={() => setIsShowWeights((isShowWeights) => !isShowWeights)}
      >
        {isShowWeights
          ? t("Скрыть настройки веса критериев")
          : t("Показать настройки веса критериев")}
      </Button>

      {isShowWeights && <UpdateWeightsForm />}

      <EmployeeTable />
    </div>
  );
};

export default EmployeeTablePage;
