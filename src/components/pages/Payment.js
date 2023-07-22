import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from '../StateProvider'
import { Product } from '../CartItems';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [{ basket, user }] = useStateValue();
  const navi = useNavigate();

  const sum = basket.reduce((amount, item) => {
    return amount + item.price;
}, 0) 


  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('')
  const [clietSecret, setClientSecret] = useState(true)

  useEffect(() =>{
    //generates the special stripe secret which allows us to change a customer
    
    const getClientSecret = async() =>{
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${sum }`
      })
      setClientSecret(response.data.clietSecret)
    }
    getClientSecret();
  }, [basket])





  const handleSubmit = async (event) => {
    //stripe stuff/code
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clietSecret, { payment_method: {
      card: elements.getElement(CardElement)
    }
  }).then(({ paymentIntent }) => {
    // paymentIntent = payment confirmation
    setSucceeded(true);
    setError(null)
    setProcessing(false)

    navi('/orders', {replace: true});
    

  })

  }

  const handleChange = event => {
    //Listen for changes in the CardElement
    //and dispay nay errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

  }

  return (
    <div className='payment'>
      <div className='payment__container'>

        <h1> Checkout ({basket?.length} items)</h1>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>Lane no 3 Turner Road</p>
            <p>Clement Town, Dehradun</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review and Delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(st => (
              <div key={st.id}>
                <Product item={st} />
                <hr />
              </div>))}
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* stripe code */}
            <form onClick={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  value={sum}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                  renderText={value => <h3>Order total: {value}</h3>} />
                  
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                  </button>
              </div>
              {error && <div>{error}</div>}
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment