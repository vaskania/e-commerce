import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from './card-dropdown.styles'

const CardDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }

  return (
     <CartDropdownContainer>
       <CartItems>
         {
           cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>)
         }
       </CartItems>
       <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
     </CartDropdownContainer>
  )
}

export default CardDropdown