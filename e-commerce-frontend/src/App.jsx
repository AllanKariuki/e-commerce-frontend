import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index';
import ProductDetail from './pages/ProductDetail';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/product/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App