import { employeeQueries } from "@entities/employee";
import { Card } from "@shared/ui/card";
import { Text } from "@shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  Area,
  CartesianGrid,
  createHorizontalChart,
  Label,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./TotalEmployeeCount.module.css";
import { useTheme } from "@app/providers/theme";
import { Theme } from "@app/providers/theme/lib/ThemeContext";
import { Loader } from "@shared/ui/Loader";

type MyData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

const Typed = createHorizontalChart<MyData, string, number>()({
  XAxis,
  YAxis,
  Area,
});

const data: MyData[] = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export const TotalEmployeeCount = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(employeeQueries.allEmployees());
  const { theme } = useTheme();
  const pieChartLabelColor = theme === Theme.DARK ? "#fff" : "#000";
  const upEmployeesCount = data?.data.filter(
    (employee) => employee.delta === "up",
  ).length;
  const downEmployeesCount = data?.data.filter(
    (employee) => employee.delta === "down",
  ).length;

  const resData = [
    {
      name: "Сотрудники с положительной динамикой",
      value: data?.data.filter((employee) => employee.delta === "up").length,
      fill: "#a3be8c",
    },
    {
      name: "Сотрудники с отрицательной динамикой",
      value: data?.data.filter((employee) => employee.delta === "down").length,
      fill: "#bf616a",
    },
  ];

  const getPotentialPercent = () => {
    if (data?.data) {
      return `${data?.data.filter((employee) => employee.delta === "up").length / data?.data.length}%`;
    }

    return "0%";
  };

  return (
    <Card className={styles.wrapper}>
      <Text centered size="l">
        {t("Динамика потенциала сотрудников")}
      </Text>

      {isLoading ? (
        <div className={styles.loader_wrapper}>
          <Loader />
        </div>
      ) : (
        <div className={styles.content}>
          <PieChart
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "150px",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={resData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="100%"
              isAnimationActive
            >
              <Label position="center" fill={pieChartLabelColor} fontSize={22}>
                {getPotentialPercent()}
              </Label>
            </Pie>
            <Tooltip />
          </PieChart>

          {typeof upEmployeesCount === "number" &&
            typeof downEmployeesCount === "number" && (
              <div className={styles.legend}>
                <div className={styles.legend__row}>
                  <div
                    className={styles.badge}
                    style={{ backgroundColor: "#a3be8c" }}
                  ></div>
                  <Text>{`${t("Сотрудники с положительной динамикой")} - ${upEmployeesCount}`}</Text>
                </div>
                <div className={styles.legend__row}>
                  <div
                    className={styles.badge}
                    style={{ backgroundColor: "#bf616a" }}
                  ></div>
                  <Text>{`${t("Сотрудники с отрицательной динамикой")} - ${downEmployeesCount}`}</Text>
                </div>
              </div>
            )}
        </div>
      )}
    </Card>
    // <Typed.AreaChart
    //   width={500}
    //   height={400}
    //   data={data}
    //   margin={{
    //     top: 10,
    //     right: 30,
    //     left: 0,
    //     bottom: 0,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <Typed.XAxis dataKey="name" />
    //   <Typed.YAxis />
    //   <Tooltip />
    //   <Typed.Area
    //     type="monotone"
    //     dataKey="uv"
    //     stroke="#ffc658"
    //     fill="#ffc658"
    //   />
    // </Typed.AreaChart>
  );
};
