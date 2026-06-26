import { CreateEmployeeForm } from "@features/create-employee";
import { UpdateEmployeeForm } from "@features/update-employee";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";

const UpdateEmployeePage = () => {
  const { t } = useTranslation("");
  return (
    <div>
      <Text size="l" centered>
        {t("Редактирование сотрудника")}
      </Text>
      <UpdateEmployeeForm />
    </div>
  );
};

export default UpdateEmployeePage;
