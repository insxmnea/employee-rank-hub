import { CreateEmployeeForm } from "@features/create-employee";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";

const CreateEmployeePage = () => {
  const { t } = useTranslation("");
  return (
    <div>
      <Text size="l" centered>
        {t("Создание нового сотрудника")}
      </Text>
      <CreateEmployeeForm />
    </div>
  );
};

export default CreateEmployeePage;
