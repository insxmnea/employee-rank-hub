import { Assessment } from "@entities/assessment";
import { getHalfYearMonths } from "@shared/lib";
import { AssessmentTypes } from "./types";

export const assessmentsToChartDataAdapter = (
  type: AssessmentTypes,
  assessments?: Assessment[],
) => {
  const assessmentsWithMonthName =
    assessments?.map((assessment) => {
      const monthName = new Date(assessment.createdAt ?? "").toLocaleString(
        "ru-RU",
        { month: "long" },
      );

      return {
        ...assessment,
        createdAt: monthName,
      };
    }) ?? [];

  const months = getHalfYearMonths({});

  return (
    months.map((month) => {
      const assessmentsByMonth = assessmentsWithMonthName.filter(
        (assessment) => assessment.createdAt === month,
      );

      let assessmentsAvgScore = 0;

      if (assessmentsByMonth.length) {
        assessmentsAvgScore = +(
          assessmentsByMonth.reduce(
            (prev, assessment) => prev + assessment[type],
            0,
          ) / assessmentsByMonth.length
        ).toFixed(2);
      }

      return {
        name: month,
        score: assessmentsAvgScore,
        count: assessmentsByMonth.length,
      };
    }) ?? []
  );
};
