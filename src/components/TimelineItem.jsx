import React from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useTimeline } from '../context/TimelineContext';
import toast from 'react-hot-toast';

const TimelineItem = ({ item }) => {
  const { removeInteraction } = useTimeline();

  const handleDelete = () => {
    removeInteraction(item.id);
    toast.error('Deleted!');
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 transition-all hover:border-green-300 duration-300 cursor-pointer group group-hover:bg-border-200">
      <div className="bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl text-[#244D3F] text-2xl transition-all group-hover:bg-green-100 group-hover:scale-110">
        {item.icon}
      </div>
      <div className="group-hover:text-green-600">
        <h3 className="font-bold text-lg">
          {item.type} <span className="font-normal">with {item.friend}</span>
        </h3>
        <p className="text-sm text-gray-400">{item.date}</p>
      </div>

      <button
        onClick={handleDelete}
        className="ml-auto text-xl text-red-500 cursor-pointer p-2 rounded-full 
  bg-red-100 hover:bg-red-500 hover:text-white 
  transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md">
        <MdOutlineDeleteForever />
      </button>
    </div>
  );
};

export default TimelineItem;
