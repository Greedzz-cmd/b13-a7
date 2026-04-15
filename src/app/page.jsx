"use client";

import FriendsContainer from "@/component/friendslist/FriendsContainer";
import StatsContainer from "@/component/stats/StatsContainer";
import { IoMdAdd } from "react-icons/io";

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
        <button className="btn bg-accent-content text-white transition-transform duration-200 hover:-translate-y-2">
          <IoMdAdd className="h-5 w-5" /> Add a Friend
        </button>
      </div>
      <StatsContainer></StatsContainer>
      <FriendsContainer></FriendsContainer>
    </div>
  );
}
