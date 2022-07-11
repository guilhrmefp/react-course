import { useState, useEffect, createContext } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setShopData] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
    }

    getCategories();
  }, []);

  const value = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  );
};
