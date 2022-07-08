import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart-context';

import './checkout.styles.scss';

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <table>
        <tbody>
          {
            cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
          }
        </tbody>
      </table>

      <div className="total">Total: ${ cartTotal }</div>
    </div>
  );
}

export default Checkout;
