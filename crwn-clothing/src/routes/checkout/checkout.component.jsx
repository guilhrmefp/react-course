import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import './checkout.styles.scss';

const Checkout = () => {
  const {
    cartItems,
    incrementItemFromCart,
    decrementItemFromCart,
    removeItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  const incrementProductFromCart = (productIndex) => () => incrementItemFromCart(productIndex);
  const decrementProductFromCart = (productIndex) => () => decrementItemFromCart(productIndex);
  const removeProductFromCart = (productIndex) => () => removeItemFromCart(productIndex);

  return (
    <div className="checkout-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((cartItem, index) => {
              const { id, imageUrl, name, quantity, price } = cartItem;

              return (
                <tr key={id}>
                  <td>
                    <img src={imageUrl} alt={name} />
                  </td>
                  <td>{ name }</td>
                  <td>
                    <button onClick={decrementProductFromCart(index)}>
                      &lsaquo;
                    </button>
                    { quantity }
                    <button onClick={incrementProductFromCart(index)}>
                      &rsaquo;
                    </button>
                  </td>
                  <td>${ price }</td>
                  <td>
                    <button onClick={removeProductFromCart(index)}>
                      &times;
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <h2>Total: ${ cartTotal }</h2>
    </div>
  );
}

export default Checkout;
