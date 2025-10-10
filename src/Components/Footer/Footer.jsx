import React from "react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { HashLoader } from "react-spinners";
import { useMediaQuery } from "react-responsive";

const Footer = () => {

  const isMobile = useMediaQuery({ maxWidth: 540 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
      <ContainerLayout>
        <footer className="footer footer-horizontal footer-center text-primary-content pt-4 md:pt-10">
          <aside>
            <HashLoader
              color="#f2f2f2"
              cssOverride={{}}
              size={isMobile? 40 : isTablet? 50 : 60}
              speedMultiplier={1}
            />
            <span className="font-bold md:text-lg">MEHEDI HASAN MAHBUB</span>
            <p className="font-semibold mb-3 text-sm md:text-base">
              Aspiring Web Developer | Learner | Building Projects with React,
              Tailwind & JavaScript
            </p>
            <hr className="w-full border border-gray-200" />
            <p className="pb-2 mt-1 md:pb-5 md:mt-3 font-medium">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
        </footer>
      </ContainerLayout>
    </div>
  );
};

export default Footer;
