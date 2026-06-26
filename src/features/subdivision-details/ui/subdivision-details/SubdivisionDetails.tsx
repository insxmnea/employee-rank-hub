import { useParams } from "react-router";
import styles from "./SubdivisionDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { EmployeeRecommendation } from "@features/employee-details/ui/employee-recommendation/EmployeeRecommendation";
import { Text } from "@shared/ui/text";
import { useTranslation } from "react-i18next";
import { AssessmentsChart } from "@widgets/assessments-chart";
import { EmployeeScoreChart } from "@widgets/employee-score-chart";
import { subdivisionScoreChartDataAdapter } from "../../adapters";
import { ProgressBar } from "@shared/ui/progress-bar";
import { DeltaIcon } from "@shared/ui/delta-icon";
import { Flex } from "@shared/ui/flex";
import { Subdivision, subdivisionQueries } from "@entities/subdivision";
import { Grid } from "@shared/ui/grid";
import { AppLink } from "@shared/ui/AppLink";
import { RoutePath } from "@shared/config/routeConfig";

const getAvgSubdivisionTopsisScore = (subdivision?: Subdivision) => {
  if (!subdivision) return 0;

  const employeesWithTopsis = subdivision.employees.filter(
    (employee) => employee.topsisScore > 0,
  );

  return (
    employeesWithTopsis.reduce((prev, curr) => prev + curr.topsisScore, 0) /
    employeesWithTopsis.length
  );
};

export interface EmployeeDetailsProps {
  id: string;
}

const SubdivisionDetails = ({ id }: EmployeeDetailsProps) => {
  const { t } = useTranslation("subdivision-page");
  const { subdivisionId } = useParams();

  const { data, isLoading } = useQuery(
    subdivisionQueries.subdivision(Number(id)),
  );

  if (!id) return null;

  const avgTopsis = getAvgSubdivisionTopsisScore(data?.data);

  if (isLoading)
    return (
      <div className={styles.loader_container}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Text size="xl">{`${data?.data.name}`}</Text>
      <Grid mt={12} gridTemplateColumns="1fr" gap={48}>
        <Flex direction="column">
          <EmployeeScoreChart
            data={subdivisionScoreChartDataAdapter(data?.data)}
            className={styles.radar_chart}
          />

          <Flex direction="column" gap={12}>
            <div>
              <Text>{`${t("Средний TOPSIS")}: ${avgTopsis ? avgTopsis.toFixed(2) : "Недостаточно данных"}`}</Text>

              {!!avgTopsis && (
                <ProgressBar maxValue={1} value={+avgTopsis?.toFixed(2)} />
              )}
            </div>

            <div>
              <Flex align="center" gap={6}>
                <Text>{`${t("Общий балл")}: ${data?.data.subdivisionCurrentAssessment ?? "Недостаточно данных"}`}</Text>
                {/* <DeltaIcon delta={data?.data.delta} /> */}
              </Flex>

              {!!data?.data.subdivisionCurrentAssessment && (
                <ProgressBar
                  maxValue={5}
                  value={+data?.data.subdivisionCurrentAssessment}
                />
              )}
            </div>

            <AppLink
              to={`${RoutePath.subdivision}/${id}`}
              className={styles.link}
            >
              <i className="nf nf-fa-clipboard_user"></i>
              <Text>{t("Перейти на страницу подразделения")}</Text>
            </AppLink>
          </Flex>
        </Flex>
      </Grid>

      {/* <Text size="l" centered className={styles["average-statistics-text"]}>
        {`${t("Оценки по критериям за последние 6 месяцев")} (Количество оценок: ${data?.data.assessmentsCount})`}
      </Text>

      <AssessmentsChart id={id} assessments={data?.data.assessment} /> */}
    </div>
  );
};

export default SubdivisionDetails;
