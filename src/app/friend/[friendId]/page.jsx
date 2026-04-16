"use client";
import StatCard from "@/component/stats/StatCard";
import { FriendsContext } from "@/context/FriendsContext";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoMdText } from "react-icons/io";
import { LuVideo } from "react-icons/lu";
import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const FriendDetails = () => {
  const { friendId } = useParams();
  const { friends } = useContext(FriendsContext);
  const numericId = Number(friendId);

  if (isNaN(numericId)) {
    notFound();
  }

  const friend = friends.find((f, i) => f.id === numericId);

  if (!friends || friends.length === 0) {
    return (
      <div className="flex justify-center py-80">
        <span className="loading loading-spinner loading-xl text-success-content"></span>
      </div>
    );
  }

  if (!friend) {
    notFound();
  }

  let statusBg = "";

  if (friend.status === "on-track") {
    statusBg = "badge-success";
  } else if (friend.status === "overdue") {
    statusBg = "badge-error";
  } else {
    statusBg = "badge-warning";
  }

  return (
    <div className="grid lg:grid-cols-3 my-20 w-11/12 mx-auto gap-6">
      <div className="">
        <div className="card bg-white shadow-sm grid justify-items-center p-6 transition-transform duration-200 hover:-translate-y-2">
          <Image
            src={friend.picture}
            width={80}
            height={80}
            alt="profile picture"
            className="rounded-full"
          ></Image>
          <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>
          <div className={`badge ${statusBg} text-white rounded-full`}>
            {friend.status}
          </div>
          <div className="flex gap-1 my-2">
            {friend.tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  className="badge bg-green-200 text-success-content font-medium rounded-full"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <p className="my-2 font-medium text-slate-500">
            &quot;{friend.bio}&quot;
          </p>
          <p className="text-slate-500 text-[14px]">{friend.email}</p>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button className="btn transition-transform duration-200 hover:-translate-y-2">
            <HiOutlineBellSnooze />
            Snooze 2 Weeks
          </button>
          <button className="btn transition-transform duration-200 hover:-translate-y-2">
            {" "}
            <PiArchiveBold />
            Archive
          </button>
          <button className="btn text-error transition-transform duration-200 hover:-translate-y-2">
            <RiDeleteBinLine /> Delete
          </button>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <StatCard
            value={friend.days_since_contact}
            label="Days Since Contact"
          ></StatCard>
          <StatCard value={friend.goal} label="Goal (Days)"></StatCard>
          <StatCard value={friend.next_due_date} label="Next Due"></StatCard>
        </div>
        <div className="card bg-white shadow-sm p-6 my-6">
          <div className="flex justify-between">
            <h3 className="text-success-content card-title">
              Relationship Goal
            </h3>
            <button className="btn">Edit</button>
          </div>
          <p className="text-slate-500 text-lg">
            Connect Every{" "}
            <span className="text-black font-semibold">{friend.goal} Days</span>
          </p>
        </div>
        <div className="card bg-white shadow-sm p-6">
          <h3 className="card-title text-success-content mb-4">
            Quick Check-In
          </h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => handleToast("Call", friend.name)}
              className="btn min-w-53.75 text-center btn-xl transition-transform duration-200 hover:-translate-y-2"
            >
              <span>
                <BiPhoneCall />
              </span>

              <span>Call</span>
            </button>
            <button
              onClick={() => handleToast("Text", friend.name)}
              className="btn min-w-53.75 text-center btn-xl transition-transform duration-200 hover:-translate-y-2"
            >
              <span>
                <IoMdText />
              </span>

              <span>Text</span>
            </button>
            <button
              onClick={() => handleToast("Video Call", friend.name)}
              className="btn min-w-53.75 text-center btn-xl transition-transform duration-200 hover:-translate-y-2"
            >
              <span>
                <LuVideo />
              </span>

              <span>Video Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
