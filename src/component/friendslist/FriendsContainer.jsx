import { FriendsContext } from "@/context/FriendsContext";
import { useContext } from "react";
import FriendCard from "./FriendCard";

const FriendsContainer = () => {
  const { friends } = useContext(FriendsContext);
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold md:text-left">Your Friends</h2>
      <div className="grid md:grid-cols-4 gap-5">
        {friends.map((friend) => {
          return <FriendCard key={friend.id} friend={friend}></FriendCard>;
        })}
      </div>
    </div>
  );
};

export default FriendsContainer;
