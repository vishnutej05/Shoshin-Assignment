import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faCalendar,
  faUser,
  faBuilding,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const handleMenuClick = (label = "Nothing") => {
  console.log(`Clicked on ${label}`);
  window.location.reload();
};

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { label: "Dashboard", icon: faChartLine, active: true },
    { label: "Recruitment", icon: faUsers },
    { label: "Schedule", icon: faCalendar },
    { label: "Employee", icon: faUser },
    { label: "Department", icon: faBuilding },
    { label: "Support", icon: faQuestionCircle },
    { label: "Settings", icon: faCog },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 transform transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } z-40`}
    >
      <div className="flex items-center gap-2 mb-10">
        <img src="/logo.png" alt="Logo" className="md:mt-0" />
      </div>

      <div className="space-y-6">
        <div className="text-xs text-gray-400 uppercase">Main Menu</div>
        <div className="space-y-4">
          {menuItems.slice(0, 5).map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 cursor-pointer ${
                item.active ? "text-blue-600 font-medium" : "text-gray-500"
              } hover:text-blue-600`}
              onClick={() => handleMenuClick(item.label)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-400 uppercase mt-8">Other</div>
        <div className="space-y-4">
          {menuItems.slice(5).map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 text-gray-500 hover:text-blue-600 cursor-pointer"
              onClick={() => handleMenuClick(item.label)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
