import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.components";
import CardDropdown from "../../components/cart-dropdown/card-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)

  return (
     <Fragment>
       <NavigationContainer>
         <LogoContainer to='/'>
           <CrwnLogo className='logo'/>
         </LogoContainer>
         <NavLinks>
           <NavLink to='/shop'>Shop</NavLink>

           {
             currentUser ?
                (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) :
                (<NavLink to='/auth'>Sign In</NavLink>)
           }
           <CartIcon/>
         </NavLinks>
         {isCartOpen && <CardDropdown/>}
       </NavigationContainer>
       <Outlet/>
     </Fragment>
  )
}

export default Navigation