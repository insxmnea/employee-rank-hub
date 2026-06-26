import { Subdivision } from "@entities/subdivision";

export const subdivisionScoreChartDataAdapter = (data?: Subdivision) => {
  if (!data) return [];

  return [
    {
      criteria: "Владение актуальной информацией",
      score: data.averageInformation,
    },
    {
      criteria: "Качество работы",
      score: data.averageQualityWork,
    },
    {
      criteria: "Уважение и этика",
      score: data.averageRespect,
    },
    {
      criteria: "Результат работы",
      score: data.averageResultWork,
    },
    {
      criteria: "Скорость работы",
      score: data.averageSpeed,
    },
    {
      criteria: "Командная работа",
      score: data.averageTeamWork,
    },
  ];
};
