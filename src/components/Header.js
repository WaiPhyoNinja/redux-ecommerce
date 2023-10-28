import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = () => {
  let carts = useSelector((state) => state.carts);
  const [categories, setCategories] = useState([]);
  const cartCount = carts.items.length;
  const dispatch = useDispatch();

  const fetchCategory = async (id) => {
    try {
      const response = await axios
      .get(`https://fakestoreapi.com/products/categories`);
    setCategories(response.data); 
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);


  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>Ecommerce Shop</h2>
        </Link>
        <div className="right menu">
          <Link to="/products" className="item">Products</Link>
          <Link to="/cateory" className="item dropbtn">
            categories
            <div className="dropdown-content">
              { categories.map((category, index) => (
                <Link to={`/category/${category}`} className="item" key={index}>
                <p>{category}</p>
              </Link>
              ))}
          
            </div>
          </Link>
          <Link to="/carts" className="item" style={{ textDecoration: 'none', display: 'flex', color: 'blue', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '8px', fontSize: 20 }} />
            <span>{cartCount !== 0 ? cartCount : ''}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
