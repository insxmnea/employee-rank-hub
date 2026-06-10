interface getPercentParams {
  value?: number;
  maxValue: number;
}

export const getPercent = ({ value, maxValue }: getPercentParams) => {
  if (!value) return 0;

  const percent = (value / maxValue) * 100;

  return percent > 100 ? 100 : (value / maxValue) * 100;
};

export const getColorByPercent = (percent: number) => {
  if (percent < 25) return "#bf616a";

  if (percent < 50) return "#d08770";

  if (percent < 75) return "#ebcb8b";

  return "#a3be8c";
};
