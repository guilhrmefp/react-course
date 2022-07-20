import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const closeCartDropdown = () => setIsCartOpen(false);
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    closeCartDropdown();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          )) : <EmptyMessage>Yout cart is empty</EmptyMessage>
        }
      </CartItems>

      <Button onClick={goToCheckoutHandler}>
        Go to Checkout
      </Button>
    </CartDropdownContainer>
  )
};

export default CartDropdown;
