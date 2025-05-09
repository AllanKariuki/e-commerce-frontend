import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index';
import ProductDetail from './pages/ProductDetail';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<MainLayout><Index /></MainLayout>} />
        <Route path="/product/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
      </Routes>
      
    </Router>
  )
}

export default App