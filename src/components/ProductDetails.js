import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsActions';
import { setCarts } from '../redux/actions/cartAction';

const ProductDetails = () => {
  const { productId } = useParams();
  const [cart, setCart] = useState([]);
  let product = useSelector((state) => state.product);
  let carts = useSelector((state) => state.carts);
  const { id, image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);


  const addedCart = (product) => {
    const isProductInCart = carts.items.filter(item => item.id === product.id);
    if (isProductInCart.length > 0) {
      console.log('Product is already in the cart');
    } else {
      dispatch(setCarts(product))
    }
  }

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt='product image' src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon" onClick={() => addedCart(product)}></i>
                  </div>
                  <div className="visible content" >Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails

// maingalar par ပြော
// နမည်
// ဘွဲ့ 
// လက်ရှိ နေပြည်တော်
// company က‌တော့ gov , တခြား project 
// laravel 
// Server ပိုင်းမှာ physical 
// report 
// content 
// traing 
// payment 

// အကြမ်းဖျင်း 
// payment 