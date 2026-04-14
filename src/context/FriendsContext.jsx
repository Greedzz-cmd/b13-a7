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

  const handleToast = (buttonName, name) => {
    toast.success(`${buttonName} with ${name}`);
  };

  const data = {
    friends,
    loading,
    handleToast,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
