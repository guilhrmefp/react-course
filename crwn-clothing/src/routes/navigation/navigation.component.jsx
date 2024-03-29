import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase.utils';
import { CartContext } from '../../contexts/cart-context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const signOutNav = <NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>;
  const signInNav = <NavLink to='/auth'>SIGN IN</NavLink>;

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          { currentUser ? signOutNav : signInNav }

          <CartIcon />
        </NavLinks>

        { isCartOpen && <CartDropdown /> }
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
