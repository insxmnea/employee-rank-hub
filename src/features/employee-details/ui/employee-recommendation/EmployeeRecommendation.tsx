import { useTranslation } from "react-i18next";
import styles from "./EmployeeRecommendation.module.css";
import { useQuery } from "@tanstack/react-query";
import { recommendationQueries } from "@entities/recommendation";
import { Text } from "@shared/ui/text";
import { Loader } from "@shared/ui/Loader";
import { formatDate } from "@shared/lib";

interface EmployeeRecommendationProps {
  employeeId: number;
}

export const EmployeeRecommendation = ({
  employeeId,
}: EmployeeRecommendationProps) => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(
    recommendationQueries.recommendation(employeeId),
  );

  console.log(data?.data);

  if (isLoading) return <Loader centered />;

  if (!data?.data.data)
    return (
      <Text className={styles["empty-recommendations"]} size="l" centered>
        {t("Рекомендации не сформированы")}
      </Text>
    );

  const recommendations = data?.data.data?.recommendations?.map(
    (recommendation, index) => {
      if (recommendation) {
        return (
          <div className={styles["recommendations-list"]} key={`rec-${index}`}>
            <Text size="l" key={`area-${index}`}>
              {recommendation.area}
            </Text>
            <div>
              <Text bold>{`${t("Как улучшить результат")}:`}</Text>
              <Text key={`action-${index}`}>{recommendation.action}</Text>
            </div>
            <div>
              <Text bold>{`${t("Польза от повышения компетенции")}:`}</Text>
              <Text key={`reason-${index}`}>{recommendation.reason}</Text>
            </div>
          </div>
        );
      }
    },
  );

  const strengths = data.data.data.strengths?.map((strength, index) => {
    if (strength) {
      return (
        <div key={`strength-${index}`}>
          <Text>{strength}</Text>
        </div>
      );
    }
  });

  const suggestedResources = data.data.data.suggestedResources?.map(
    (resource, index) => {
      if (resource) {
        return (
          <div key={`suggested-resource-${index}`}>
            <Text>{resource}</Text>
          </div>
        );
      }
    },
  );

  return (
    <div className={styles.wrapper}>
      <Text size="l" centered>
        {t("Рекомендации")}
      </Text>
      <Text size="l">{`1.${t("Зоны роста")}`}</Text>
      {recommendations}
      <Text size="l">{`2.${t("Сильные стороны")}`}</Text>
      {strengths}
      <Text size="l">{`3.${t("Предложение ресурсов для повышения компетенций")}`}</Text>
      {suggestedResources}
      <Text size="l">{`4.${t("Общая оценка навыков сотрудника")}`}</Text>
      {data.data.data.summary}

      <Text
        size="s"
        right
      >{`${t("Последнее обновление")}: ${formatDate(data.data.createdAt)}`}</Text>
    </div>
  );
};
