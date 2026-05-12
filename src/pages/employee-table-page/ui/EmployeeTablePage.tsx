import { EmployeeTable } from "@features/employee-table";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import styles from "./EmployeeTablePage.module.css";

const EmployeeTablePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Text size="l" centered className={styles.header}>
        {t("Иерархия сотрудников")}
      </Text>
      <EmployeeTable />
    </div>
  );
};

export default EmployeeTablePage;
