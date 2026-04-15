"use client";
import video from "../../../public/assets/video.png";
import call from "../../../public/assets/call.png";
import text from "../../../public/assets/text.png";
import Image from "next/image";
import { useContext } from "react";
import { FriendsContext } from "@/context/FriendsContext";

const TimeLineCard = () => {
  const { filteredTimeLine } = useContext(FriendsContext);
  if (filteredTimeLine.length === 0) {
    return (
      <div className="text-center text-slate-500 bg-white py-30 shadow-sm card">
        <p className="text-4xl font-medium text-success-content">
          No interactions yet
        </p>
        <p className="text-sm mt-3">
          Use Quick Check-In to log a call, text, or video with a friend
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {filteredTimeLine.map((entry, i) => {
        let timeLineIcon;
        if (entry.type === "Video Call") {
          timeLineIcon = video;
        } else if (entry.type === "Call") {
          timeLineIcon = call;
        } else {
          timeLineIcon = text;
        }
        return (
          <div
            key={i}
            className="flex-row gap-4 bg-white card shadow-sm p-6 items-center transition-transform duration-200 hover:-translate-y-2"
          >
            <div>
              <Image src={timeLineIcon} alt={entry.type}></Image>
            </div>
            <div className="text-slate-500">
              <p className="text-lg">
                <span className="font-semibold text-xl text-black">
                  {entry.type}
                </span>{" "}
                with {entry.name}
              </p>
              <p className="font-semibold">
                {new Date(entry.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLineCard;
