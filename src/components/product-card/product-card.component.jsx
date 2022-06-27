import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ProductCardFooter, ProductCardContainer } from './product-card.styles'

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product

  const addProductToCart = () => addItemToCart(product)

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