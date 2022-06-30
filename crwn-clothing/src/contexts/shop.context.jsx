import { useState, useEffect, createContext } from 'react';

import SHOP_DATA from '../data/shop-data.json';

export const ShopContext = createContext({
  shopData: [],
  setShopData: () => [],
});

export const ShopProvider = ({ children }) => {
  const [shopData, setShopData] = useState([]);
  const value = {
    shopData,
    setShopData,
  };

  useEffect(() => {
    setShopData(SHOP_DATA);
  }, []);

  console.log(shopData);

  return (
    <ShopContext.Provider value={value}>
      { children }
    </ShopContext.Provider>
  );
};
