import { EmployeeHierarchyTable } from "@features/employee-table";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import styles from "./EmployeeHierarchyPage.module.css";

const EmployeeHierarchyPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Text size="l" centered className={styles.header}>
        {t("Иерархия сотрудников")}
      </Text>
      <EmployeeHierarchyTable />
    </div>
  );
};

export default EmployeeHierarchyPage;
