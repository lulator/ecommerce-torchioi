import React from 'react'
import login from './images/login.png'
import cart from './images/cart.png'

const CartWidget = () => {
    return (
        <div>
        <img src={login} className="login-icon" alt="login" />
        <img src={cart} className="cart-icon" alt="cart" />
        </div>
    )
}

export default CartWidget
