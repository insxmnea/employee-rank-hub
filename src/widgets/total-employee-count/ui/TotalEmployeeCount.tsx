import { Card } from "@shared/ui/card";
import { Text } from "@shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import styles from "./TotalEmployeeCount.module.css";
import { Loader } from "@shared/ui/Loader";
import { subdivisionQueries } from "@entities/subdivision";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ErrorBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const TotalEmployeeCount = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(subdivisionQueries.allSubdivisions());

  const employeesCount = data?.data.reduce(
    (acc, curr) => acc + curr.employees.length,
    0,
  );

  const subdivisionsCount = data?.data.length;

  const assessmentsCount = data?.data.reduce(
    (acc, curr) => acc + curr.assessmentsCount,
    0,
  );

  if (!employeesCount || !subdivisionsCount) return null;

  return (
    <Card className={styles.wrapper}>
      <Text centered size="l">
        {t("Численность и отделы")}
      </Text>

      {isLoading ? (
        <div className={styles.loader_wrapper}>
          <Loader />
        </div>
      ) : (
        <div className={styles.legend}>
          <BarChart
            accessibilityLayer
            barCategoryGap="10%"
            barGap={4}
            data={[
              {
                name: "Отделы",
                count: subdivisionsCount,
              },
              {
                name: "Сотрудники",
                count: employeesCount,
              },
              {
                name: "Оценки",
                count: assessmentsCount,
              },
            ]}
            height={200}
            layout="vertical"
            margin={{
              bottom: 5,
              left: 50,
              right: 30,
              top: 20,
            }}
            stackOffset="none"
            syncMethod="index"
            throttleDelay="raf"
            throttledEvents={[
              "mousemove",
              "touchmove",
              "pointermove",
              "scroll",
              "wheel",
            ]}
            width={500}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Legend />
            <Tooltip />
            <Bar
              dataKey="count"
              name={"Количество"}
              fill="#8884d8"
              stackId="a"
            />
          </BarChart>
        </div>
      )}
    </Card>
  );
};
