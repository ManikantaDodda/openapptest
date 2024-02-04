// Import necessary dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
// import DragDropFile from './components/UpDrag';
import LoginForm from './components/LoginForm';
// Your Routes component
const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Dashboard Route */}
      
      <Route path="/" element={<LoginForm />} />
      <Route path="/upload" element={<Dashboard />} />

      {/* Upload Component Route */}
      <Route path="/uploads" element={<Upload />} />

      {/* 404 Route */}
      {/* <Route path="dr" element={<DragDropFile />} /> */}
    </Routes>
  );
};

export default AppRoutes;
