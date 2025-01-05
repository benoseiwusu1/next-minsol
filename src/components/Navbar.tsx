// components/Navbar.tsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";

const links = [
  {
    label: "Home",
    path: "/",
  },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const { openModal } = useModal();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const toggleDropdown = (index: number) =>
    setActiveDropdown(activeDropdown === index ? null : index);
  const handleButtonClick = () => {
    openModal();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white text-black py-4 relative">
        <div className="px-4 md:px-20 container mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="">
              <img src="/images/sol.png" className="w-44" alt="Logo" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <div key={index} className="relative">
                  <Link href={link.path} className="hover:underline">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="bg-main px-4 py-2 rounded-lg text-white hover:bg-orange-700 hidden md:flex"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button className="block md:hidden text-3xl" onClick={toggleMenu}>
              <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} width="24" />
            </button>
          </div>

          {/* Mobile Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          {isMenuOpen && (
            <div className="fixed top-0 right-0 w-[90%] h-full bg-main text-white z-50 p-6">
              <button
                className="text-3xl mb-6"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <Icon icon="mdi:close" />
              </button>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="block hover:underline text-lg mb-6"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleButtonClick}
                    className="bg-black px-8 py-2 rounded-lg w-max text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Desktop Side Drawer */}
          {isDrawerOpen && (
            <div className="hidden md:block">
              <SideDrawer closeDrawer={toggleDrawer} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
