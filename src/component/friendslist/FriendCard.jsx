import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={`/friend/${friend.id}`}
      className="card bg-white shadow-sm grid justify-items-center p-6 transition-transform duration-200 hover:-translate-y-2"
    >
      <Image
        src={friend.picture}
        width={80}
        height={80}
        alt="profile picture"
        className="rounded-full"
      ></Image>
      <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>
      <p className="text-xs text-slate-500">{friend.days_since_contact}d ago</p>
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
    </Link>
  );
};

export default FriendCard;
