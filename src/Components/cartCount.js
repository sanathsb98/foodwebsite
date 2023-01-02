import React from 'react'
import {useSelector} from 'react-redux'

function CartCount() {
    const cart = useSelector((state)=>state.cart)
  return (
    <h8>{cart.cart.length}</h8>
  )
}

export default CartCount