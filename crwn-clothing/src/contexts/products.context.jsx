import { useState, useEffect, createContext } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setShopData] = useState([]);
  const value = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
