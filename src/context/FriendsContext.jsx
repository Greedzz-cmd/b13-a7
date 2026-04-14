"use client";

import { createContext, useEffect, useState } from "react";

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

  const data = {
    friends,
    loading,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
