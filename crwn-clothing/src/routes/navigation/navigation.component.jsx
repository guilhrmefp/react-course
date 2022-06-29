import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';


import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
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
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
