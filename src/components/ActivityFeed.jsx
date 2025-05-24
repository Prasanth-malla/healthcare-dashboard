const ActivityFeed = () => {
  const bars = [60, 80, 40, 90, 70, 50, 30]; // Static heights for bar chart

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity</h2>
      <p className="text-sm text-gray-600 mb-4">3 appointments on this week</p>
      <div className="flex space-x-2 h-24">
        {bars.map((height, index) => (
          <div
            key={index}
            className="bg-blue-600 w-8 rounded-t-md"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;