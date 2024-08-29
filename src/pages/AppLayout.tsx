import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = ({search, setSearch}) => {
  

  return (
    <>
      <Navbar setSearch={setSearch} search={search} />
      <Outlet />
    </>
  );
}

export default AppLayout;