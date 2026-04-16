import { FriendsContext } from "@/context/FriendsContext";
import StatCard from "./StatCard";

import { useContext } from "react";

const StatsContainer = () => {
  const { friends, loading, timeLine } = useContext(FriendsContext);

  if (loading) {
    return (
      <div className=" flex justify-center py-80">
        <span className="loading loading-spinner loading-xl text-success-content"></span>
      </div>
    );
  }

  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  const needAttention = friends.filter(
    (friend) => friend.status !== "on-track",
  ).length;

  return (
    <div className="grid md:grid-cols-4 gap-4 py-10 border-b-[1.5px] border-slate-200">
      <StatCard value={friends.length} label={"Total Friends"}></StatCard>
      <StatCard value={onTrack} label={"On Track"}></StatCard>
      <StatCard value={needAttention} label={"Need Attention"}></StatCard>
      <StatCard
        value={timeLine.length}
        label={"Interactions This Month"}
      ></StatCard>
    </div>
  );
};

export default StatsContainer;
