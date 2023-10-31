import React from 'react'
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import stripePromise from '../stripe';

const Checkout = () => {
  const handlePayment = async (elements, stripe, e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe has not loaded yet
      return;
    }

    const cardElement = elements.getElement('card');

    // Create a PaymentMethod or PaymentIntent and complete the payment
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      // Handle and display the error
    } else {
      // Payment was successful; you can confirm the payment on your server
    }
  };
  return (
    
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <div className='payment-main'>
            <div className="payment-container">
              <h2>Payment Information</h2>
              <form className="payment-form" onSubmit={(e) => handlePayment(elements, stripe, e)}>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" id="cardNumber" placeholder="**** **** **** ****" />
                </div>
                <div className="form-group">
                  <label htmlFor="expiration">Expiration Date</label>
                  <input type="text" id="expiration" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" id="cvv" placeholder="123" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Cardholder's Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select id="country">
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="checkbox" id="saveCard" />
                  <label htmlFor="saveCard">Save this card for future purchases</label>
                </div>
                <button type="button" className="payment-button">Submit Payment</button>
              </form>
            </div>
          </div>
        )}
      </ElementsConsumer>
    </Elements>
  )
}

export default Checkout
