import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const cartTotalItems = () => {
    return cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  }

  return (
    <div
      className="cart-icon-container"
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotalItems()}</span>
    </div>
  );
}

export default CartIcon;
