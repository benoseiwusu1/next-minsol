// src/pages/about/AboutLayout.tsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AboutLayout: React.FC = () => {
  return (
    <div className="">
      {/* Sub-navigation bar */}
      <nav className="bg-main py-4 text-gray-100">
        <div className="container mx-auto px-4 md:px-20 md:flex justify-between hidden">
          <h3>About Us</h3>
          <div className="flex space-x-6">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              About Us
            </NavLink>
            {/* <NavLink
              to="history"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              History
            </NavLink> */}
            <NavLink
              to="plants-and-offices"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Plants and Offices
            </NavLink>
            <NavLink
              to="compliance"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Compliance
            </NavLink>
            {/* <NavLink
              to="affiliates"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Affiliates
            </NavLink> */}
          </div>
        </div>
      </nav>

      {/* Render the selected page */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutLayout;
