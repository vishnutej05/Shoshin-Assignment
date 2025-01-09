import React from 'react';

const StatCard = ({ title, value, subtitle, subtitleColor, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg ${bgColor} border border-gray-200`}>
      <h3 className="text-navy-800 font-medium mb-2">{title}</h3>
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-navy-800">{value}</span>
        <span className={`font-medium mt-4 ${subtitleColor}`}>{subtitle}</span>
      </div>
    </div>
  );
};

export default StatCard;
