import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { GiPalmTree } from 'react-icons/gi'

import { Cart } from './';
import {useStateContext} from '../context/StateContext.js'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
      <GiPalmTree size={'1.8rem'} /><Link href="/"> Tropix Music Shop</Link>
      </p>

      <button 
          type="button" 
          className="cart-icon"
          onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar