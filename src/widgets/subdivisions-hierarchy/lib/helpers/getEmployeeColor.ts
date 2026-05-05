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
