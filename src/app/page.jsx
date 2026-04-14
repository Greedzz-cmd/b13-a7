"use client";

import FriendsContainer from "@/component/friendslist/FriendsContainer";
import StatsContainer from "@/component/stats/StatsContainer";

export default function Home() {
  return (
    <div className="py-20 container mx-auto text-center">
      <div>
        <h2 className="text-5xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className="text-slate-500 mt-4 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-accent-content text-white">
          Add a Friend
        </button>
      </div>
      <StatsContainer></StatsContainer>
      <FriendsContainer></FriendsContainer>
    </div>
  );
}
