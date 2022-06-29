import { createSelector } from "reselect";

export const selectCart = (state) => state.cart

const newCartCount = cartItems.reduce(
   (total, cartItem) => total + cartItem.quantity
)

const newCartTotal = cartItems.reduce(
   (total, cartItem) => total + cartItem.quantity * cartItem.price
)