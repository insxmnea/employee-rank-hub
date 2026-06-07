import styles from "./AssessmentsChart.module.css";
import {
  Area,
  CartesianGrid,
  createHorizontalChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type MyData = {
  name: string;
  score: number;
};

const Typed = createHorizontalChart<MyData, string, number>()({
  XAxis,
  YAxis,
  Area,
});

const data: MyData[] = [
  { name: "Page A", score: 4000 },
  { name: "Page B", score: 3000 },
  { name: "Page C", score: 2000 },
  { name: "Page D", score: 2780 },
  { name: "Page E", score: 1890 },
  { name: "Page F", score: 2390 },
  { name: "Page G", score: 3490 },
];

interface AssessmentsChartProps {}

export const AssessmentsChart = (props: AssessmentsChartProps) => {
  return (
    <Typed.AreaChart
      width={`${100}%`}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Typed.XAxis dataKey="name" />
      <Typed.YAxis />
      <Tooltip />
      <Typed.Area
        type="monotone"
        dataKey="score"
        name="Оценка"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </Typed.AreaChart>
  );
};
