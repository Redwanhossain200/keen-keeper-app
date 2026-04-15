import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTimeline } from "../context/TimelineContext";
import { RiDeleteBinLine, RiNotificationSnoozeLine, RiMessage2Line, RiVideoOnLine } from "react-icons/ri";
import { VscArchive } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addInteraction } = useTimeline();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriend(data.find((f) => f.id == id)));
  }, [id]);

  const handleAction = (type) => {
    const iconMap = {
      Call: <LuPhoneCall />,
      Text: <RiMessage2Line />,
      Video: <RiVideoOnLine />
    };

    const newLog = {
      id: Date.now(),
      type: type,
      friend: friend.name,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      icon: iconMap[type],
    };
    addInteraction(newLog);
    toast.success(`${type} interaction logged with ${friend.name}!`);
  };

  if (!friend) return (
    <div className="flex justify-center py-20">
      <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm text-center cursor-pointer group transition-all">
          <img src={friend.picture} className="w-32 h-32 rounded-full mx-auto border-4 border-gray-50 object-cover mb-2" alt={friend.name} />
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#EFAD44] transition-colors">{friend.name}</h2>

          <div className={`badge my-2 py-4 px-5 uppercase rounded-full text-[11px] font-bold border-none text-white ${friend.status === "overdue" ? "bg-red-500" : friend.status === "almost due" ? "bg-orange-400" : "bg-[#244D3F]"}`}>
            {friend.status}
          </div>

          <div className="flex flex-wrap justify-center gap-2 my-2">
            {friend.tags.map((tag) => (
              <span key={tag} className="bg-green-50 text-green-700 text-xs uppercase px-3 py-1 rounded-2xl font-bold"># {tag}</span>
            ))}
          </div>

          <p className="text-gray-500 text-sm italic mb-2">"{friend.bio}"</p>

          <div className="flex items-center justify-center gap-1 mt-2">
            <MdOutlineEmail className="text-gray-400 text-lg" />
            <span className="text-gray-600 text-sm">{friend.email}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <button className="btn btn-outline border-gray-200 bg-white rounded-xl text-gray-600 flex items-center justify-start gap-3 hover:bg-gray-100 transition-all active:scale-95 text-base md:text-sm">
            <RiNotificationSnoozeLine /> Snooze 2 Weeks
          </button>
          <button className="btn btn-outline border-gray-200 bg-white rounded-xl text-gray-600 flex items-center justify-start gap-3 hover:bg-gray-100 transition-all active:scale-95 text-base md:text-sm">
            <VscArchive /> Archive
          </button>
          <button className="btn btn-outline border-gray-200 bg-white rounded-xl text-red-400 hover:bg-red-400 hover:text-white flex items-center justify-start gap-3 transition-all active:scale-95 text-base md:text-sm">
            <RiDeleteBinLine /> Delete Friend
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center cursor-pointer group transition-all ">
            <h4 className="text-3xl font-bold text-gray-800 group-hover:text-[#EFAD44] transition-all">{friend.days_since_contact}</h4>
            <p className="text-gray-500 text-xs mt-1 uppercase">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center cursor-pointer group transition-all ">
            <h4 className="text-3xl font-bold text-gray-800 group-hover:text-[#EFAD44] transition-all">{friend.goal}</h4>
            <p className="text-gray-500 text-xs mt-1 uppercase">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center cursor-pointer group transition-all ">
            <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#EFAD44] transition-all mt-2">{friend.next_due_date}</h4>
            <p className="text-gray-500 text-xs mt-1 uppercase">Next Due Date</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 cursor-pointer group shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-800">Relationship Goal</h3>
            <button className="btn btn-sm hover:text-white hover:bg-[#244D3F] bg-gray-50 border-gray-200 text-gray-600 rounded-lg"><FiEdit /> Edit</button>
          </div>
          <p className="text-gray-600">Connect every <span className="font-bold transition-colors group-hover:text-[#EFAD44] text-[#244D3F]">{friend.goal} days</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-bold mb-4 text-lg text-gray-800">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { type: "Call", icon: <LuPhoneCall className="text-xl md:text-2xl" /> },
              { type: "Text", icon: <RiMessage2Line className="text-xl md:text-2xl" /> },
              { type: "Video", icon: <RiVideoOnLine className="text-xl md:text-2xl" /> }
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => handleAction(item.type)}
                className="btn border border-gray-200 h-24 md:h-28 flex flex-col gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl group transition-all active:scale-95"
              >
                <div className="text-[#244D3F] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-bold text-xs md:text-base text-gray-700 group-hover:text-[#EFAD44] transition-colors">{item.type}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FriendDetails;