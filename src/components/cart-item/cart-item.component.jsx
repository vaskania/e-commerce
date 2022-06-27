import { CardItemContainer, ItemDetails } from './cart-item.styles'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
     <CardItemContainer>
       <img src={imageUrl} alt={`${name}`}/>
       <ItemDetails>
         <span className='name'>{name}</span>
         <span className='price'>{quantity} X ${price}</span>
       </ItemDetails>
     </CardItemContainer>
  )
}

export default CartItem