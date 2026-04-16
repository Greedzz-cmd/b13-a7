"use client";
import TimeLineContainer from "@/component/timeLine/TimeLineContainer";
import { FriendsContext } from "@/context/FriendsContext";
import { useContext } from "react";

const TimeLinePage = () => {
  const { setSortingType, sortingType, handleSearch } =
    useContext(FriendsContext);
  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-5xl font-bold text-center md:text-left">TimeLine</h2>
      <div className="md:flex justify-between my-6">
        <div className="flex justify-center md:justify-normal">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="dialog" className="btn m-1 w-80">
              Filter TimeLine
              {sortingType === "" ? "(Default)" : ` by ${sortingType}`}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => setSortingType("")}>Default</a>
              </li>
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
        <div className="flex justify-center md:justify-normal mt-3 md:mt-0 ">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search by Name"
              onKeyDown={(e) =>
                e.key === "Enter" && handleSearch(e.target.value)
              }
            />
          </label>
        </div>
      </div>
      <TimeLineContainer></TimeLineContainer>
    </div>
  );
};

export default TimeLinePage;
