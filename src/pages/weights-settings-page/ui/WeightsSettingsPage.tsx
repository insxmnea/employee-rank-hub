import { UpdateWeightsForm } from "@features/update-weights";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import styles from "./WeightsSettingsPage.module.css";

const WeightsSettingsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Text size="l" centered className={styles.header}>
        {t("Настройка весов критериев")}
      </Text>
      <UpdateWeightsForm />
    </div>
  );
};

export default WeightsSettingsPage;
