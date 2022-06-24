import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/card-icon/cart-icon.components";
import CardDropdown from "../../components/cart-dropdown/card-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
     <Fragment>
       <div className='navigation'>
         <Link className='logo-container' to='/'>
           <CrwnLogo className='logo'/>
         </Link>
         <div className="nav-links-container">
           <Link className='nav-link' to='/shop'>Shop</Link>

           {
             currentUser ?
                (<span onClick={signOutUser} className='nav-link'>Sign Out</span>) :
                (<Link className='nav-link' to='/auth'>Sign In</Link>)
           }
           <CartIcon/>
         </div>
         {isCartOpen && <CardDropdown/>}
       </div>
       <Outlet/>
     </Fragment>
  )
}

export default Navigation