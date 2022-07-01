import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div
      className={`cart-dropdown-container ${!isCartOpen ? 'hide' : ''}`}
    >
      <div className="cart-items" />

      <Button>
        Go to Checkout
      </Button>
    </div>
  )
};

export default CartDropdown;
