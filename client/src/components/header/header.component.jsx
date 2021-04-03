import React ,  { useContext } from 'react'
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import { signOutStart } from './../../redux/user/user.actions'
import  currentUserContext  from '../../contexts/current-user/current-user.context'


import { CartContext } from '../../providers/cart/cart.provider'

const Header = ({  signOutStart }) => {

   const currentUser = useContext(currentUserContext)

   const { hidden } = useContext(CartContext)

   return (<HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink  to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            
            { currentUser ? 
            
                (<OptionLink as = 'div' onClick={() => signOutStart()}>SIGN OUT</OptionLink> ):

                (<OptionLink  to='/signin'>SIGN IN</OptionLink>)
            }
        
       <CartIcon />
       
        </OptionsContainer>
        { hidden ? null : (<CartDropdown />)}
        
   </HeaderContainer>
)
}


const mapDispatchToProps = dispatch => ({

    signOutStart : () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(Header);