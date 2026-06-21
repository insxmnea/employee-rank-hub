import {
  Area,
  CartesianGrid,
  createHorizontalChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Assessment } from "@entities/assessment";
import { assessmentsToChartDataAdapter } from "../adapters";
import { useState } from "react";
import { Flex } from "@shared/ui/flex";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { AssessmentTypes } from "../types";
import { classnames } from "@shared/lib/classnames";
import styles from "./AssessmentsChart.module.css";

type MyData = {
  name: string;
  score: number;
  count: number;
};

const Typed = createHorizontalChart<MyData, string, number>()({
  XAxis,
  YAxis,
  Area,
});

interface AssessmentsChartProps {
  id: string;
  assessments?: Assessment[];
}

export const AssessmentsChart = ({
  id,
  assessments,
}: AssessmentsChartProps) => {
  const { t } = useTranslation();
  // const months = getHalfYearMonths({});
  const [activeType, setActiveType] = useState<AssessmentTypes>("information");

  // console.log(assessments);

  return (
    <>
      <Flex width="100%" justify="space-between" gap={20} mb={12}>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classnames(
            styles["group-btn"],
            {
              [styles.active]: activeType === "teamWork",
            },
            [],
          )}
          onClick={() => setActiveType("teamWork")}
        >
          {t("Командная работа")}
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classnames(
            styles["group-btn"],
            {
              [styles.active]: activeType === "information",
            },
            [],
          )}
          onClick={() => setActiveType("information")}
        >
          {t("Владение актуальной информацией")}
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classnames(
            styles["group-btn"],
            {
              [styles.active]: activeType === "qualityWork",
            },
            [],
          )}
          onClick={() => setActiveType("qualityWork")}
        >
          {t("Качество работы")}
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classnames(
            styles["group-btn"],
            {
              [styles.active]: activeType === "speed",
            },
            [],
          )}
          onClick={() => setActiveType("speed")}
        >
          {t("Скорость работы")}
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classnames(
            styles["group-btn"],
            {
              [styles.active]: activeType === "resultWork",
            },
            [],
          )}
          onClick={() => setActiveType("resultWork")}
        >
          {t("Результат работы")}
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classnames(
            styles["group-btn"],
            {
              [styles.active]: activeType === "respect",
            },
            [],
          )}
          onClick={() => setActiveType("respect")}
        >
          {t("Уважение и этика")}
        </Button>
      </Flex>

      <Typed.AreaChart
        width={`${100}%`}
        height={400}
        data={assessmentsToChartDataAdapter(activeType, assessments)}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Typed.XAxis dataKey="name" />
        <Typed.YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
        <Tooltip />
        <Typed.Area
          type="monotone"
          dataKey="score"
          name="Оценка"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </Typed.AreaChart>
    </>
  );
};
