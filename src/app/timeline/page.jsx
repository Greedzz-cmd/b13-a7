"use client";
import TimeLineContainer from "@/component/timeLine/TimeLineContainer";
import { FriendsContext } from "@/context/FriendsContext";
import { useContext } from "react";

const TimeLinePage = () => {
  const { setSortingType, sortingType } = useContext(FriendsContext);
  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-5xl font-bold text-center md:text-left">TimeLine</h2>
      <div className="flex justify-center md:justify-normal">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="dialog" className="btn m-1 w-80 my-6">
            Filter TimeLine by {sortingType}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => setSortingType("Text")}>Text</button>
            </li>
            <li>
              <button onClick={() => setSortingType("Video Call")}>
                Video Call
              </button>
            </li>
            <li>
              <button onClick={() => setSortingType("Call")}>Call</button>
            </li>
            <li>
              <button onClick={() => setSortingType("oldest")}>Oldest</button>
            </li>
            <li>
              <button onClick={() => setSortingType("newest")}>Newest</button>
            </li>
          </ul>
        </div>
      </div>
      <TimeLineContainer></TimeLineContainer>
    </div>
  );
};

export default TimeLinePage;
