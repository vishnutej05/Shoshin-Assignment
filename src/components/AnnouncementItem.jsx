import React from "react";

const AnnouncementItem = ({ title, time, isPinned = false }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h4 className="text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="flex items-center gap-2">
        {isPinned && <span className="text-gray-400">📌</span>}
        <span className="text-gray-400">⋮</span>
      </div>
    </div>
  );
};

export default AnnouncementItem;
