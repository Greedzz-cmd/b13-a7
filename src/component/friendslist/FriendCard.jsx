import Image from "next/image";
import pfp from "../../../public/assets/Ellipse 1 (1).png";

const FriendCard = ({ friend }) => {
  let statusBg = "";

  if (friend.status === "on-track") {
    statusBg = "badge-success";
  } else if (friend.status === "overdue") {
    statusBg = "badge-error";
  } else {
    statusBg = "badge-warning";
  }

  return (
    <div className="card bg-white shadow-sm grid justify-items-center p-6">
      <Image src={pfp} alt="pfp"></Image>
      <h2 className="text-xl font-semibold mt-4">John doe</h2>
      <p>62d ago</p>
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
      <div className={`badge ${statusBg} text-white rounded-full`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;
