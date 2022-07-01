import { useState, useEffect, createContext } from 'react';

import PRODUCTS from '../data/shop-data.json';

export const ProductsContext = createContext({
  shopData: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setShopData] = useState([]);
  const value = {
    products,
  };

  useEffect(() => {
    setShopData(PRODUCTS);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
