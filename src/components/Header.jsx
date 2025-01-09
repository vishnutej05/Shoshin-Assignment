// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faMessage,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="ml-5 lg:ml-0 flex items-center justify-between mb-8 gap-4 relative px-4 md:px-8">
      {/* Search Bar */}
      <div className="relative flex-1 md:w-auto flex items-center">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-full md:w-80"
        />
      </div>

      {/* Right Side Icons (Notifications, Messages, Profile) */}
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faBell} className="text-gray-600 text-xl" />
        <FontAwesomeIcon icon={faMessage} className="text-gray-600 text-xl" />
        <div className="flex items-center gap-2">
          <img
            src="https://c0.wallpaperflare.com/preview/718/951/788/photography-style-colour-funfair.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium hidden md:inline">Shoshin</span>
          <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
