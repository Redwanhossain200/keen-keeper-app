import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const statusColors = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-[#244D3F] text-white"
  };

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="card bg-white border border-gray-100 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg p-5 text-center group"
    >
      <img
        src={friend.picture}
        className="w-20 h-20 rounded-full mx-auto drop-shadow-md object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
        alt={friend.name}
      />
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#EFAD44] transition-colors">{friend.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map(tag => (
          <span key={tag} className="bg-green-50 text-green-700 text-xs px-4 py-1 rounded-2xl uppercase font-bold tracking-wider">{tag}</span>
        ))}
      </div>
      <div className={`py-2 px-4 rounded-full text-xs font-bold capitalize ${statusColors[friend.status]} transition-colors`}>
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;