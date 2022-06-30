import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen, selectCartItems } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from './card-dropdown.styles'

const CardDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const isCartOpen = useSelector(selectIsCartOpen)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    dispatch(setIsCartOpen(!isCartOpen))
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