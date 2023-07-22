import React from 'react'
import './SubtotalBox.css'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom';
import CurrencyFormat  from 'react-currency-format'



function SubtotalBox() {
    const navigate = useNavigate();
    const [{ basket }] = useStateValue();

    const sum = basket.reduce((amount, item) => {
        return amount + item.price;
    }, 0);

    return (
        <div className='subtotalbox'>
            <p><small>Your order is eligible for FREE Delivery.</small></p>
            <p><small>Select this option at checkout. Details</small></p>
            {/* <h5 className='total'>Subtotal({basket.length} items):  {sum}</h5> */}

            
            <CurrencyFormat
                value={sum}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
                renderText={value => <h5 className='total'>Subtotal({basket.length} items):  {value}</h5>} />

            <div style={{ display: 'flex', justifyContent: "center" }}>
                <input type='checkbox' />
                <p>This order contains a gift</p>
            </div>
            
            <button className='buyButton' onClick={e => navigate('/payment') }>Proceed to Buy</button>
        </div>
    )
}

export default SubtotalBox