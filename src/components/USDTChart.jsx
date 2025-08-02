import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dummyData = [
  { time: "10:00", price: 0.998 },
  { time: "11:00", price: 1.002 },
  { time: "12:00", price: 1.000 },
  { time: "13:00", price: 1.001 },
  { time: "14:00", price: 0.999 },
  { time: "15:00", price: 1.003 },
];

export default function USDTChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={dummyData}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#00cec9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
