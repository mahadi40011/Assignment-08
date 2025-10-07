import React from "react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { LiaSlackHash } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
      <ContainerLayout>
        <footer className="footer footer-horizontal footer-center text-primary-content pt-4 md:pt-10">
          <aside>
            <LiaSlackHash className="hidden sm:block md:h-12 md:w-12 lg:h-16 lg:w-16" />
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
