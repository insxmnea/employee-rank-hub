import { Subdivision } from "@entities/subdivision";

const getAvgSubdivisionTopsisScore = (subdivision?: Subdivision) => {
  if (!subdivision) return 0;

  const employeesWithTopsis = subdivision.employees.filter(
    (employee) => employee.topsisScore > 0,
  );

  return (
    employeesWithTopsis.reduce((prev, curr) => prev + curr.topsisScore, 0) /
    (employeesWithTopsis.length || 1)
  );
};

export const subdivisionTableDataAdapter = (data?: Subdivision[]) => {
  if (!data) return [];

  return data.map((subdivision) => ({
    ...subdivision,
    avgTopsis: getAvgSubdivisionTopsisScore(subdivision),
  }));
};
