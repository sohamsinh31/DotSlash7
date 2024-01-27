"use client"
import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Content from './Components/Content/Content';
import Test from './Components/Test/Test';

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div className="container" style={{ flex: 1, padding: '20px' }}>
        <Navbar title='Intoduction to C' />
        <Test />
      </div>
    </div>
  );
}
