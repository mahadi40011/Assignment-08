import React from "react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { NavLink, useNavigate } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const navItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 0, name: "Apps", path: "/apps" },
    { id: 0, name: "Installation", path: "/installation" },
  ];

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-base-100 shadow-sm">
      <ContainerLayout>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                <span><TiThMenu size={28}></TiThMenu></span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-28 shadow"
              >
                {navItems.map((item) => (
                  <NavLink
                  key={item.id}
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
            <div
              onClick={handleLogoClick}
              className="flex justify-center items-center gap-2 cursor-pointer"
            >
              <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-3xl font-bold hidden md:flex lg:flex">
                HERO.IO
              </span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item, i) => (
                <NavLink
                  key={i}
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
              className="btn text-base md:text-xl py-4 md:py-6 font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
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
