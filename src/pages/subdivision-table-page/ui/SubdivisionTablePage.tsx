import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import styles from "./SubdivisionTablePage.module.css";
import { SubdivisionTable } from "@features/subdivision-table";

const SubdivisionTablePage = () => {
  const { t } = useTranslation();
  // const [isShowWeights, setIsShowWeights] = useState(false);

  return (
    <div>
      <Text size="l" centered className={styles.header}>
        {t("Подразделения")}
      </Text>

      <SubdivisionTable />
    </div>
  );
};

export default SubdivisionTablePage;
