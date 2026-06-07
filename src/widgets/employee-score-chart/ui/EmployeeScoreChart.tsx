import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

type EmployeeScoreData = {
  criteria: string;
  score: number;
};

interface EmployeeScoreChartProps {
  data: EmployeeScoreData[];
  className?: string;
}

export const EmployeeScoreChart = ({
  data,
  className,
}: EmployeeScoreChartProps) => {
  return (
    <RadarChart
      style={{
        width: "100%",
        height: "100%",
        // maxWidth: "500px",
        maxHeight: "300px",
        aspectRatio: 1,
      }}
      className={className}
      responsive
      outerRadius="80%"
      data={data}
      // margin={{
      //   top: 20,
      //   left: 20,
      //   right: 20,
      //   bottom: 20,
      // }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="criteria" />
      <PolarRadiusAxis domain={[0, 5]} tick={false} axisLine={false} />
      <Tooltip cursor={false} />
      <Radar
        name="Оценка"
        dataKey="score"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
