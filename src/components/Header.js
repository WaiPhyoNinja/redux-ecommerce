import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let carts = useSelector((state) => state.carts);
  const cartCount = carts.items.length;

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>Ecommerce Shop</h2>
        </Link>
        <div className="right menu">
          <Link to="/products" className="item">Products</Link>
          <Link to="/categories" className="item">Categories</Link>
          <Link to="/carts" className="item" style={{ textDecoration: 'none', display: 'flex', color : 'blue', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '8px' , fontSize: 20 }} />
            <span>{cartCount !== 0 ? cartCount : ''}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
