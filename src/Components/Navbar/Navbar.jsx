import React, { useState } from "react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { NavLink, useNavigate } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Apps", path: "/apps" },
    { id: 2, name: "Installation", path: "/installation" },
  ];

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const navLink = navItems.map((item) => (
    <NavLink
      key={item.id}
      to={item.path}
      className={({ isActive }) =>
        `${isActive ? "font-semibold text-xl text-[#632EE3]" : "text-xl hover:text-[#632EE3]"}`
      }
    >
      {item.name}
    </NavLink>
  ));

  return (
    <div className="bg-base-100 shadow-sm z-[100] sticky top-0">
      <ContainerLayout>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="relative">
              <span
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="md:hidden"
              >
                {navbarOpen ? (
                  <RiMenuFoldFill className="font-bold" size={40}></RiMenuFoldFill>
                ) : (
                  <RiMenuUnfoldFill className="font-bold" size={40}></RiMenuUnfoldFill>
                )}
              </span>
                <ul
                  onClick={() => setNavbarOpen(false)}
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content rounded-b-lg z-1 mt-3 w-fit shadow absolute bg-base-100 duration-1000 ${
                    navbarOpen ? "" : "-ml-64"
                  }`}
                >
                  {navLink}
                </ul>
            </div>

            <div
              onClick={handleLogoClick}
              className="justify-center items-center gap-2 cursor-pointer"
            >
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 md:w-12 md:h-12 sm:hidden ml-3"
              />
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-3xl font-bold lg:flex hidden md:block">
                HERO.APPS
              </span>
            </div>
          </div>

          <div className="navbar-center">

            <div
              onClick={handleLogoClick}
              className="justify-center items-center gap-2 cursor-pointer md:hidden flex"
            >
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-3xl font-bold lg:flex hidden sm:block">
                HERO.APPS
              </span>
            </div>

            <div className=" hidden md:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-semibold text-xl ml-5 ${
                        isActive
                          ? "border-b-3 text-[#632EE3] pb-2 border-[#632EE3]"
                          : " hover:text-[#632EE3]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="navbar-end">
            <NavLink
              to={"https://github.com/mahadi40011"}
              target="_blank"
              className="btn text-base md:text-xl py-4 md:py-6 font-semibold rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
            >
              <FaGithub></FaGithub> Contribute
            </NavLink>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
