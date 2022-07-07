import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => {
  const { setIsCartOpen } = useContext(CartContext);

  const closeCartDropdown = () => setIsCartOpen(false);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        }
      </div>

      <Link to="/checkout">
        <Button onClick={closeCartDropdown}>
          Go to Checkout
        </Button>
      </Link>
    </div>
  )
};

export default CartDropdown;
