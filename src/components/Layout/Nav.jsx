import React from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  {
    title: "Timeline",
    link: "/timeline",
  },
  {
    title: "Overview",
    link: "/link",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  console.log("I am", handleMenuClick);

  return (
    <>
      <div className="relative">
        <header className="flex items-center justify-between px-[48px] md:px-[128px] py-[34px] md:py-[79px]">
          <img src="\assets\getlinked-logo.png" alt="" />
          <div className="hidden md:block">
            <ul className="text-white flex gap-[56px] font-bold text-[17px]">
              {navLinks.map((link, id) => (
                <NavItem {...link} key={id} />
              ))}
            </ul>
          </div>
          <button className="hidden md:block w-[172px] h-[53px] bg-gradient-to-r from-[#903AFF] to-[#D434FE] rounded-[4px]">
            Register
          </button>

          <div onClick={handleMenuClick} className="md:hidden z-[2100] ">
            {isMenuOpen ? (
              <IoMdClose className="text-white text-[30px] " />
            ) : (
              <IoMdMenu className="text-white text-[30px]" />
            )}
          </div>
          <MobileMenu isMenuOpen={isMenuOpen} />
        </header>

        <span className="w-full h-[1px] bg-[gray] top-[100px] md:top-[180px] absolute"></span>

        <img
          src="/assets/Purple-Lens-Flare.png"
          alt=""
          className="absolute top-[-20px]"
        />
      </div>
    </>
  );
};

export default Nav;

const NavItem = ({ title, link }) => {
  return (
    <li className="relative">
      <Link to={link} href="" className="cursor-pointer ">
        <span>{title}</span>
      </Link>
    </li>
  );
};

const MobileMenu = ({ isMenuOpen }) => {
  return (
    <div
      className={`${isMenuOpen ? "w-[70%]  pl-[32px] " : "w-0"} fixed 
            right-0 top-0 h-screen duration-500  font-barlow z-[2000]  bg-[#150E28]`}
    >
      <div className="flex flex-col gap-8 mt-[106px] z-[2000]">
        {navLinks.map((item, id) => (
          <Link
            key={id}
            to={item.link}
            className="flex items-center text-white gap-[14px]"
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
