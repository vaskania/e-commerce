import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import './card-dropdown.styles.scss'

const CardDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }

  return (
     <div className='cart-dropdown-container'>
       <div className='cart-items'>
         {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
       </div>
       <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
     </div>
  )
}

export default CardDropdown