import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ContainerLayout from './ContainerLayout';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <main className='flex-1 bg-gray-100'>
        <ContainerLayout>
          <Outlet></Outlet>
        </ContainerLayout>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;