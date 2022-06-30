import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";

import { selectCartItems } from '../../store/cart/cart.selector'

import { ProductCardFooter, ProductCardContainer } from './product-card.styles'

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, price, imageUrl } = product

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
     <ProductCardContainer>
       <img src={imageUrl} alt={`${name}`}/>
       <ProductCardFooter>
         <span className='name'>{name}</span>
         <span className='price'>{price}</span>
       </ProductCardFooter>
       <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
     </ProductCardContainer>
  )
}

export default ProductCard