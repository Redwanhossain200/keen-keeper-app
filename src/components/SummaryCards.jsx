const SummaryCards = ({ friends }) => {
  const stats = [
    { label: 'Total Friends', value: friends.length },
    {
      label: 'On Track',
      value: friends.filter((f) => f.status === 'on-track').length,
    },
    {
      label: 'Need Attention',
      value: friends.filter((f) => f.status === 'overdue').length,
    },
    { label: 'Interactions This Month', value: 12 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 md:p-8 rounded-xl hover:scale-105 active:scale-95 cursor-pointer transition-all border border-gray-100 shadow-sm text-center flex flex-col justify-center min-h-32">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-800 leading-none">
            {stat.value}
          </h4>
          <p className="text-gray-500 text-sm md:text-base mt-2 font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
