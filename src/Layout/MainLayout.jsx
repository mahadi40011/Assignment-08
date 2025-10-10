import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ContainerLayout from "./ContainerLayout";

const MainLayout = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {navigation.state === "loading" && <CustomLoader />}
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
      <main onClick={()=> setNavbarOpen(false)} className="flex-1 bg-gray-100">
        <ContainerLayout>
          <Outlet></Outlet>
        </ContainerLayout>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
