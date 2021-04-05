import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {default as CartIcon} from '../cart-icon/cart-icon.container'
import {default as CartDropdown} from '../cart-dropdown/cart-dropdown.container'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import {selectCurrentUser} from '../../redux/user/user.selectors'



const Header = ({ currentUser, hidden }) => (

   <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink  to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            
            { currentUser ? 
            
                (<OptionLink as = 'div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> ):

                (<OptionLink  to='/signin'>SIGN IN</OptionLink>)
            }

            <CartIcon />

        </OptionsContainer>
        { hidden ? null : (<CartDropdown />)}
        
   </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser,

})
export default connect(mapStateToProps)(Header);