import React from "react";

const MetricCard = ({ title, value, details }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-navy-800 font-medium ">{title}</h3>
      <div className="flex items-center justify-between gap-2">
        <span className="text-4xl font-bold text-navy-800">{value}</span>
        <img
          src="/one.jpg"
          alt="Image"
          className="w-24 h-24 object-cover ml-4"
        />
      </div>
      <div className="text-sm text-gray-500 space-y-1">
        {details.map((detail, index) => (
          <div key={index}>{detail}</div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
