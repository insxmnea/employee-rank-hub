import { useParams } from "react-router";
import styles from "./EmployeePage.module.css";
import { useQuery } from "@tanstack/react-query";
import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { EmployeeRecommendation } from "@features/employee-details/ui/employee-recommendation/EmployeeRecommendation";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import { AssessmentsChart } from "@widgets/assessments-chart";
import { EmployeeScoreChart } from "@widgets/employee-score-chart";
import { EmployeeScoreChartDataAdapter } from "../adapters";

const getGender = (gender?: string) => {
  if (!gender) return "-";

  return gender === "male" ? "мужской" : "женский";
};

const EmployeePage = () => {
  const { t } = useTranslation("employee-page");
  const { employeeId } = useParams();

  const { data, isLoading } = useQuery(
    employeeQueries.employee(Number(employeeId)),
  );

  if (!employeeId) return null;

  if (isLoading)
    return (
      <div className={styles.loader_container}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Text size="xl">{`${data?.data.lastName} ${data?.data.firstName} ${data?.data.patronymic}`}</Text>
      <div className={styles.employee_info}>
        {!data?.data.avatarImage && (
          <div className={styles.avatar}>
            <i className="nf nf-fa-circle_user"></i>
          </div>
        )}
        <div>
          <Text>{`${t("Пол")}: ${getGender(data?.data.gender)}`}</Text>
          <Text>{`${t("Дата рождения")}: ${data?.data.birthday}`}</Text>
          <Text>{`${t("Должность")}: ${data?.data.profession}`}</Text>
          <Text>{`${t("Позиция")}: ${data?.data.role}`}</Text>
        </div>

        <EmployeeScoreChart
          data={EmployeeScoreChartDataAdapter(data?.data)}
          className={styles.radar_chart}
        />

        <div className={styles.result_score}>
          <Text>{`${t("Рейтинг TOPSIS")}: ${data?.data.topsisScore?.toFixed(2) ?? "Недостаточно данных"}`}</Text>

          <Text>{`${t("Общий балл")}: ${data?.data.employeeCurrentAssessment ?? "Недостаточно данных"}`}</Text>
        </div>
      </div>
      <Text size="l" centered className={styles["average-statistics-text"]}>
        {t("Средние показатели")}
      </Text>

      <AssessmentsChart />

      <EmployeeRecommendation employeeId={Number(employeeId)} />
    </div>
  );
};

export default EmployeePage;
