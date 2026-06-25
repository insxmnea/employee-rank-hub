import { getPercent } from "@shared/ui/progress-bar/helpers";

export const getEmployeeColor = (score?: number) => {
  if (!score) return "#f0f0f0";

  if (score >= 4) {
    return "#a3be8c";
  }
  if (score < 3) {
    return "#bf616a";
  }

  return "#ebcb8b";
};

export const getEmployeeColorByTopsis = (score?: number) => {
  const percent = getPercent({ value: score, maxValue: 1 });

  if (!score) return "#f0f0f0";

  if (percent < 25) return "#bf616a";

  if (percent < 50) return "#d08770";

  if (percent < 75) return "#ebcb8b";

  return "#a3be8c";
};
