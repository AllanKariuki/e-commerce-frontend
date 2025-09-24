import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index';
import ProductDetail from './pages/ProductDetail';
import MainLayout from './components/layouts/MainLayout';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<MainLayout><Index /></MainLayout>} />
        <Route path="/product/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
        <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
        <Route path="/checkout" element={<MainLayout><Checkout /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/wishlist" element={<MainLayout><WishlistPage /></MainLayout>} />
      </Routes>
      
    </Router>
  )
}

export default App