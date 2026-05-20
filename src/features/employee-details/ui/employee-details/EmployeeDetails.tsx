import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { Text } from "@shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import styles from "./EmployeeDetails.module.css";
import { EmployeeRecommendation } from "../employee-recommendation/EmployeeRecommendation";

const getGender = (gender?: string) => {
  if (!gender) return "-";

  return gender === "male" ? "мужской" : "женский";
};

export interface EmployeeDetailsProps {
  id: string;
}

const EmployeeDetails = ({ id }: EmployeeDetailsProps) => {
  const { t } = useTranslation("employee-details");

  const { data, isLoading } = useQuery(employeeQueries.employee(Number(id)));

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
          <Text>{`${t("Gender")}: ${getGender(data?.data.gender)}`}</Text>
          <Text>{`${t("Birthday")}: ${data?.data.birthday}`}</Text>
          <Text>{`${t("Profession")}: ${data?.data.profession}`}</Text>
          <Text>{`${t("Grade")}: ${data?.data.role}`}</Text>
        </div>
      </div>
      <Text size="l" centered className={styles["average-statistics-text"]}>
        {t("Average statistics")}
      </Text>
      <div>{`${t("Information")}: ${data?.data.averageInformation}`}</div>
      <div>{`${t("Quality work")}: ${data?.data.averageQualityWork}`}</div>
      <div>{`${t("Respect")}: ${data?.data.averageRespect}`}</div>
      <div>{`${t("Result work")}: ${data?.data.averageResultWork}`}</div>
      <div>{`${t("Speed")}: ${data?.data.averageSpeed}`}</div>
      <div>{`${t("Team work")}: ${data?.data.averageTeamWork}`}</div>

      <Text>{`${t("Рейтинг TOPSIS")}: ${data?.data.topsisScore?.toFixed(2) ?? "Недостаточно данных"}`}</Text>

      <Text>{`${t("Общий балл")}: ${data?.data.employeeCurrentAssessment ?? "Недостаточно данных"}`}</Text>

      <EmployeeRecommendation employeeId={Number(id)} />
    </div>
  );
};

export default EmployeeDetails;
