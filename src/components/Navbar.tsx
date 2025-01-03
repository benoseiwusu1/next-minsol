// components/Navbar.tsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import { useModal } from "@/context/ModalContext";

const dropdownData = [
  {
    title: "ME FIT Programs",
    items: [
      {
        name: "ME FIT Grinding",
        description:
          "We offer integral and technical solutions to help our customers tackle the unique challenges at each mining operation and to positively impact priority KPIs: tons per hour, safety management, availability and maintainability of equipment, risk prevention, among others.",
        link: "/solutions/me-fit-grinding",
      },
      {
        name: "ME FIT Crushing",
        description:
          "We design solutions to help our customers achieve their goals by combining crusher wear parts with technology tools, advice, training and monitoring — all of which allow us to create value in our customers’ processes.",
        link: "/solutions/me-fit-crushing",
      },
    ],
  },
  // {
  //   title: "Products and Services",
  //   items: [
  //     {
  //       name: "Crushing",
  //       description: "Description for Crushing",
  //       link: "/solutions/crushing",
  //     },
  //     {
  //       name: "Grinding",
  //       description: "Description for Grinding",
  //       link: "/solutions/grinding",
  //     },
  //     {
  //       name: "Grinding Media",
  //       description: "Description for Grinding Media",
  //       link: "/solutions/grinding-media",
  //     },
  //     {
  //       name: "Digital Solutions",
  //       description: "Description for Digital Solutions",
  //       link: "/solutions/digital-solutions",
  //     },
  //   ],
  // },
];

const links = [
  {
    label: "Solutions",
    subItems: dropdownData,
  },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  // { label: "Case Studies", path: "/case-study" },
  // { label: "Sustainability", path: "/sustainability" },
  // { label: "Investors", path: "/investors" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
            <Link to="/" className="">
              <img src="/images/sol.png" className="w-44" alt="Logo" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <div key={index} className="relative">
                  {link.subItems ? (
                    <div>
                      <button
                        className="flex items-center space-x-1 hover:underline"
                        onClick={() => toggleDropdown(index)}
                      >
                        <span>{link.label}</span>
                        <Icon
                          icon={
                            activeDropdown === index
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
                          }
                          width="20"
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute left-0 top-10 bg-main text-white z-50 p-8 gap-8 w-[500px] h-auto rounded-lg">
                          {link.subItems.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h4 className="font-bold text-lg mb-4">
                                {section.title}
                              </h4>
                              {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="space-y-2 mb-6">
                                  <h5 className="font-semibold">{item.name}</h5>
                                  <p className="text-sm">{item.description}</p>
                                  <Link
                                    to={item.link}
                                    className="text-secondary hover:underline"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    Learn More →
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={link.path} className="hover:underline">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Sidebar Menu Button */}
            {/* <button
              className="hidden md:block text-2xl"
              onClick={toggleDrawer}
              aria-label="Toggle Side Drawer"
            >
              <Icon icon="mdi:menu" width="30" />
            </button> */}
            <button
              onClick={openModal} //desktop
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

          {/* Mobile Navigation Menu */}
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
                    {link.subItems ? (
                      <div className="hidden">
                        <button
                          className="w-full flex justify-between items-center"
                          onClick={() => toggleDropdown(index)}
                        >
                          <span>{link.label}</span>
                          <Icon
                            icon={
                              activeDropdown === index
                                ? "mdi:chevron-up"
                                : "mdi:chevron-down"
                            }
                            width="20"
                          />
                        </button>
                        {activeDropdown === index && (
                          <ul className="mt-2 ml-4 space-y-2">
                            {link.subItems.map((section, sectionIndex) => (
                              <li key={sectionIndex}>
                                {section.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    to={item.link}
                                    className="block hover:underline"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className="block hover:underline text-lg mb-6"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
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

      {/* Contact Modal */}
    </>
  );
};

export default Navbar;
