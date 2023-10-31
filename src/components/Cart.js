import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../redux/actions/cartAction';
import { Link } from 'react-router-dom';

const Cart = () => {
    let carts = useSelector((state) => state.carts);
    let cartsCount = useSelector((state) => state.counts);
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const cartItems = carts.items;
    let total = 0;

    const handleDecrementQuantity = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrementQuantity = () => {
        setCount(count + 1);
    };

    const removeClick = (product) => {
        dispatch(removeCart(product));
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-list">
                {cartItems.length === 0 ? (
                    <>
                        <p>Your cart is empty</p>
                    </>
                ) : (
                    cartItems.map((cart, key) => {
                        const itemPrice = parseFloat(cart.price) * count;
                        total += itemPrice;

                        return (
                            <div className="cart-item" key={key}>
                                <div className="cart-item-details">
                                    <img src={cart.image} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <h3>{cart.title}</h3>
                                        <p>Price: {itemPrice} Ks</p>
                                    </div>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="quantity">
                                        <button onClick={handleDecrementQuantity}>
                                            -
                                        </button>
                                        <span>{count}</span>
                                        <button onClick={handleIncrementQuantity} >
                                            +
                                        </button>
                                    </div>
                                    <button onClick={() => removeClick(cart.id)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            {cartItems.length === 0 ? (
                <h2> Total Prices : 0 Ks </h2>
            ) : (
                <div className="flex-container">
                    <p>Total Price: {total} Ks</p>
                    <Link to="/checkout"><button>Check Out</button></Link>
                </div>
            )}

        </div>
    )
}

export default Cart
