import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import TimelineItem from "../components/TimelineItem";
import { FaChartBar, FaSearch } from "react-icons/fa";

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { interactions } = useTimeline();

  const filtered = interactions.filter((item) => {
    const matchesFilter = filter === "All" || item.type === filter;
    const matchesSearch = item.friend.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8">
        Timeline
      </h1>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 mb-10">
        <div className="w-full md:w-auto order-2 md:order-1">
          <select
            className="select select-bordered border border-gray-300 w-full md:w-55 rounded-xl bg-white outline-none focus:border-[#244D3F]"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Interactions</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="relative w-full text-black md:w-80 order-1 md:order-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 z-10 text-gray-400 pointer-events-none">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search by friend..."
            className="input input-bordered w-full pl-10 rounded-xl bg-white border-gray-300 focus:border-[#244D3F] outline-none relative"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-6 bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="mb-4 text-gray-200 flex justify-center items-center">
              <FaChartBar size={64} />
            </div>
            <p className="text-gray-400 text-xl font-medium italic">
              No history found {filter}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;