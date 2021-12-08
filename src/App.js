import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListPage from './pages/ProductListPage'

function App() {
  return (
    <div>
      <h1>E-Commerce</h1>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
