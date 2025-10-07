import React from "react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const navItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 0, name: "Apps", path: "/apps" },
    { id: 0, name: "My Apps", path: "/my-apps" },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <ContainerLayout>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems.map((item) => (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-semibold text-[#632EE3]"
                          : "hover:text-[#632EE3]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={logo} alt="logo" className="w-12 h-12"/>
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-3xl font-bold">HERO.IO</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item) => (
                <NavLink
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
          <div className="navbar-end">
            <NavLink
              to={"https://github.com/mahadi40011"}
              target="_blank"
              className="btn text-xl py-6 font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
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
