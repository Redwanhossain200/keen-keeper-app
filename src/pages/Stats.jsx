import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTimeline } from '../context/TimelineContext';
import { FaChartBar } from 'react-icons/fa';

const Stats = () => {
  const { interactions } = useTimeline();

  const statsData = [
    { name: 'Text', value: interactions.filter(i => i.type === 'Text').length, color: '#8b5cf6' },
    { name: 'Call', value: interactions.filter(i => i.type === 'Call').length, color: '#244D3F' },
    { name: 'Video', value: interactions.filter(i => i.type === 'Video').length, color: '#22c55e' },
  ];

  const hasData = interactions.length > 0;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1a332a] text-center md:text-left">
        Friendship Analytics
      </h1>

      <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-md">
        <h2 className="text-xl font-semibold mb-6 opacity-80 text-center md:text-left text-[#1a332a]">
          By Interaction Type
        </h2>

        <div className="h-65 md:h-80 w-full flex items-center justify-center">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  paddingAngle={5}
                  cornerRadius={12}
                  dataKey="value"
                  stroke="none"
                >
                  {statsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" align="center" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center">
              <div className="mb-3 text-[#244D3F] flex justify-center items-center"><FaChartBar size={32} /></div>
              <p className="text-gray-400 text-lg italic">
                No interactions logged yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;