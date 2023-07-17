import React from 'react'
import './SubtotalBox.css'
import { useStateValue } from './StateProvider'


function SubtotalBox() {
    const [{ basket }] = useStateValue();

    const sum = basket.reduce((amount, item) => {
        return amount + item.price;
    }, 0);

    return (
        <div className='subtotalbox'>
            <p><small>Your order is eligible for FREE Delivery.</small></p>
            <p><small>Select this option at checkout. Details</small></p>
            <h5 className='total'>Subtotal({basket.length} items):  {sum}</h5>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <input type='checkbox' />
                <p>This order contains a gift</p>
            </div>
            <button className='buyButton'>Proceed to Buy</button>
        </div>
    )
}

export default SubtotalBox