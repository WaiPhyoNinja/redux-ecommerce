
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import ProductCategoryListing from './components/ProductCategoryListing';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route>404 Not Found</Route>
          <Route path="/" element={<ProductListing />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path='/cateory' element={<ProductCategoryListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
