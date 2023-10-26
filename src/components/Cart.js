import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    let carts = useSelector((state) => state.carts);
    const cartItems = carts.items;

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-list">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((cart, key) => (
                        <div className="cart-item" key={key}>
                        <div className="cart-item-details">
                            <img src={cart.image} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{cart.title}</h3>
                                <p>Price: {cart.price} Ks</p>
                            </div>
                        </div>
                        <div className="cart-item-actions">
                            <div className="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button>Remove</button>
                        </div>
                    </div>
                    ))
                )}
            </div>
        </div>

    )
}

export default Cart
