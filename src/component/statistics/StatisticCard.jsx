"use client";
import { FriendsContext } from "@/context/FriendsContext";
import { useContext } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const StatisticCard = () => {
  const { videosCounts, textsCount, callsCount } = useContext(FriendsContext);

  const data = [
    { name: "Call", value: callsCount, fill: "#003320" },
    { name: "Text", value: textsCount, fill: "#00a96e" },
    { name: "Video Call", value: videosCounts, fill: "#8b5cf6" },
  ];

  if (callsCount === 0 && textsCount === 0 && videosCounts === 0) {
    return (
      <div className="text-center text-slate-500 py-30">
        <p className="text-4xl font-medium text-success-content">
          No interactions yet
        </p>
        <p className="text-sm mt-3">
          Start logging calls, texts, and video calls to see your stats
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-125">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="80%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            <Legend className="my-6" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticCard;
