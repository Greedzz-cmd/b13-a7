import { FriendsContext } from "@/context/FriendsContext";
import { useContext } from "react";
import FriendCard from "./FriendCard";

const FriendsContainer = () => {
  const { friends, loading } = useContext(FriendsContext);

  if (loading) {
    return (
      <div className=" flex justify-center py-80">
        <span className="loading loading-spinner loading-xl text-success-content"></span>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold md:text-left">Your Friends</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {friends.map((friend) => {
          return <FriendCard key={friend.id} friend={friend}></FriendCard>;
        })}
      </div>
    </div>
  );
};

export default FriendsContainer;
