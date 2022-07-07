import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const signOutNav = <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>;
  const signInNav = <Link className='nav-link' to='/auth'>SIGN IN</Link>;

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          { currentUser ? signOutNav : signInNav }

          <CartIcon />
        </div>

        { isCartOpen && <CartDropdown /> }
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
