import React from "react";

const ScheduleItem = ({ title, time, priority = false }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <h4 className="text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <span className="text-gray-400">⋮</span>
    </div>
  );
};

export default ScheduleItem;
