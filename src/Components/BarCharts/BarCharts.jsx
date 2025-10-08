import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ barChartData }) => {
  console.log(barChartData);

  return (
    <div className="w-full h-80 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={barChartData}
          layout="vertical"
          margin={{ left: 15, right: 40 }}
        >
          <CartesianGrid strokeDasharray="10" horizontal={false} />
          <XAxis tick={{ fontWeight: "600" }} type="number" />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickMargin={20}
            tick={{ fontWeight: "bold" }}
            reversed
          />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          <Bar
            dataKey="count"
            fill="#FF8811"
            radius={[0, 10, 10, 0]}
            barSize={20}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
