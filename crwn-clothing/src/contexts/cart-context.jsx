import { useState, createContext } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const cartItemsHasProductToAdd = cartItems.findIndex((product) => product.id === productToAdd.id);

  // if found, increment quantity
  if (cartItemsHasProductToAdd > -1) {
    cartItems[cartItemsHasProductToAdd].quantity = cartItems[cartItemsHasProductToAdd].quantity + 1;
  } else {
    cartItems.push({
      ...productToAdd,
      quantity: 1,
    });
  }

  // return new array with modified cartItems / new cart item
  return cartItems;
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={value}>
      { children }
    </CartContext.Provider>
  );
};
