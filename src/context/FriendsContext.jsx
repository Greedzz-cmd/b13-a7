"use client";

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getTimeLinesFromLocalDB,
  addTimeLineToLocalDB,
} from "../utils/localDB";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };
    fetchFriends();
  }, []);

  const handleToast = (buttonName, userName) => {
    toast.success(`${buttonName} with ${userName}`);
    addToTimeLine(buttonName, userName);
  };

  const [timeLine, setTimeLine] = useState([]);
  const addToTimeLine = (type, name) => {
    const newEntry = {
      type,
      name,
      date: new Date().toISOString(),
    };
    setTimeLine((prev) => [...prev, newEntry]);
    addTimeLineToLocalDB(newEntry);
  };

  useEffect(() => {
    const saved = getTimeLinesFromLocalDB();
    if (saved.length > 0) setTimeLine(saved);
  }, []);

  const [sortingType, setSortingType] = useState("");
  const [filteredTimeLine, setFilteredTimeLine] = useState(timeLine);
  const callsCount = timeLine.filter((entry) => entry.type === "Call").length;
  const textsCount = timeLine.filter((entry) => entry.type === "Text").length;
  const videosCounts = timeLine.filter(
    (entry) => entry.type === "Video Call",
  ).length;

  useEffect(() => {
    let result = [...timeLine];

    if (sortingType === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortingType === "oldest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortingType) {
      result = result.filter((entry) => entry.type === sortingType);
    } else {
      result = [...timeLine];
    }

    setFilteredTimeLine(result);
  }, [sortingType, timeLine]);

  const handleSearch = (value) => {
    const valueInLowerCase = value.toLowerCase().replaceAll(" ", "");
    const result = timeLine.filter((entry) =>
      entry.name.toLowerCase().replaceAll(" ", "").includes(valueInLowerCase),
    );
    setFilteredTimeLine(result);
  };

  const data = {
    friends,
    loading,
    handleToast,
    timeLine,
    setTimeLine,
    filteredTimeLine,
    setFilteredTimeLine,
    setSortingType,
    sortingType,
    videosCounts,
    callsCount,
    textsCount,
    handleSearch,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
