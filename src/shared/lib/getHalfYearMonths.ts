interface getHalfYearMonthsParams {
  date?: Date;
  locale?: string;
  includeCurrent?: boolean;
  order?: "asc" | "desc";
}

export const getHalfYearMonths = ({
  date = new Date(),
  locale = "ru-RU",
  includeCurrent = true,
  order = "asc",
}: getHalfYearMonthsParams) => {
  const months = [];
  const monthsCount = 6;

  for (let i = monthsCount - 1; i >= 0; i--) {
    const targetDate = new Date(date);
    targetDate.setDate(1);
    targetDate.setMonth(date.getMonth() - i);

    const monthName = targetDate.toLocaleString(locale, { month: "long" });
    months.push(monthName);
  }

  if (!includeCurrent) {
    months.pop();
  }

  return order === "asc" ? months : months.reverse();
};
