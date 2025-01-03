// components/SideDrawer.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

interface SideDrawerProps {
  closeDrawer: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ closeDrawer }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeDrawer, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`fixed right-0 top-0 w-2/3 sm:w-[400px] h-full bg-blue-700 p-6 z-50 overflow-y-auto transform transition-transform duration-150 shadow-lg ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-white text-2xl mb-4 flex justify-end"
          onClick={handleClose}
          aria-label="Close Menu"
        >
          <Icon icon="mdi:close" width="24" />
        </button>
        <ul className="space-y-4 text-white">
          <li>Certifications</li>
          <li>Investors</li>
          <li>Events</li>
          <li>Career Opportunities</li>
          <li>Contact</li>
          <li>News</li>
          <li>Virtual Library (coming soon)</li>
          <li>Whistleblowing Channel</li>
          <li className="flex space-x-2 mt-4">
            <a href="#" className="text-xl">
              Instagram
            </a>
            <a href="#" className="text-xl">
              LinkedIn
            </a>
            <a href="#" className="text-xl">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
