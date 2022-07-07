import { useContext } from 'react';
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
                    <button onClick={() => removeItemFromCart(cartItem)}>
                      &lsaquo;
                    </button>
                    { quantity }
                    <button onClick={() => addItemToCart(cartItem)}>
                      &rsaquo;
                    </button>
                  </td>
                  <td>${ price }</td>
                  <td>
                    <button>
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
