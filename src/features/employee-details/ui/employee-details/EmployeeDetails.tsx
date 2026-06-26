import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { Text } from "@shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import styles from "./EmployeeDetails.module.css";
import { EmployeeRecommendation } from "../employee-recommendation/EmployeeRecommendation";
import { AppLink } from "@shared/ui/AppLink";
import { RoutePath } from "@shared/config/routeConfig";
import { EmployeeScoreChart } from "@widgets/employee-score-chart";
import { EmployeeScoreChartDataAdapter } from "@features/employee-details/adapters";
import { ProgressBar } from "@shared/ui/progress-bar";
import { Flex } from "@shared/ui/flex";

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
        {!data?.data.avatarImage ? (
          <div className={styles.avatar}>
            <i className="nf nf-fa-circle_user"></i>
          </div>
        ) : (
          <img
            src={`http://localhost:5000/image/avatars/${data?.data.avatarImage}`}
          ></img>
        )}
        <div>
          <Text>{`${t("Gender")}: ${getGender(data?.data.gender)}`}</Text>
          <Text>{`${t("Birthday")}: ${data?.data.birthday}`}</Text>
          <Text>{`${t("Profession")}: ${data?.data.profession}`}</Text>
          <Text>{`${t("Grade")}: ${data?.data.role}`}</Text>
          <Text>{`${t("Подразделение")}: ${data?.data.subdivision.name}`}</Text>

          <AppLink to={`${RoutePath.employee}/${id}`} className={styles.link}>
            <i className="nf nf-fa-clipboard_user"></i>
            <Text>{t("Перейти в профиль")}</Text>
          </AppLink>
        </div>
      </div>

      <div>
        <Text>{`${t("Рейтинг TOPSIS")}: ${data?.data.topsisScore ? data?.data.topsisScore?.toFixed(2) : "Недостаточно данных"}`}</Text>

        {!!data?.data.topsisScore && (
          <ProgressBar
            maxValue={1}
            value={+data?.data.topsisScore?.toFixed(2)}
          />
        )}
      </div>

      <div>
        <Flex align="center" gap={6}>
          <Text>{`${t("Общий балл")}: ${data?.data.employeeCurrentAssessment ?? "Недостаточно данных"}`}</Text>
          {/* <DeltaIcon delta={data?.data.delta} /> */}
        </Flex>

        {data?.data.employeeCurrentAssessment && (
          <ProgressBar
            maxValue={5}
            value={+data?.data.employeeCurrentAssessment}
          />
        )}
      </div>

      <EmployeeScoreChart
        data={EmployeeScoreChartDataAdapter(data?.data)}
        className={styles.radar_chart}
      />

      <EmployeeRecommendation employeeId={Number(id)} />
    </div>
  );
};

export default EmployeeDetails;
