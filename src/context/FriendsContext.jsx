"use client";

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    console.log(timeLine);
  };

  const [sortingType, setSortingType] = useState("All");
  const [filteredTimeLine, setFilteredTimeLine] = useState(timeLine);

  useEffect(() => {
    let result = [...timeLine];

    if (sortingType === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortingType === "oldest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortingType) {
      result = result.filter((entry) => entry.type === sortingType);
    }

    setFilteredTimeLine(result);
  }, [sortingType, timeLine]);

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
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
