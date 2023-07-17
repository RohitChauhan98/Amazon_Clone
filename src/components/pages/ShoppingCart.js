import React from 'react'
import SubtotalBox from '../SubtotalBox'
import './ShoppingCart.css'
import CartItems from '../CartItems'

function ShoppingCart() {
  return (
    <div className='ShoppingCart'>
      <CartItems />
      <SubtotalBox />
    </div>
  )
}

export default ShoppingCart