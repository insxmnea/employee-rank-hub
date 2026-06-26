import { CreateSubdivisionForm } from "@features/create-subdivision";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";

const CreateSubdivisionPage = () => {
  const { t } = useTranslation("");
  return (
    <div>
      <Text size="l" centered>
        {t("Создание нового подразделения")}
      </Text>
      <CreateSubdivisionForm />
    </div>
  );
};

export default CreateSubdivisionPage;
