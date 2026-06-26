import { CreateSubdivisionForm } from "@features/create-subdivision";
import { UpdateSubdivisionForm } from "@features/update-subdivision/ui/UpdateSubdivisionForm";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";

const UpdateSubdivisionPage = () => {
  const { t } = useTranslation("");
  return (
    <div>
      <Text size="l" centered>
        {t("Редактировать подразделение")}
      </Text>
      <UpdateSubdivisionForm />
    </div>
  );
};

export default UpdateSubdivisionPage;
