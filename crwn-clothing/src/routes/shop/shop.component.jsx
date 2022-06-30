import { useContext } from 'react';
import { ShopContext } from '../../contexts/shop.context';

const Shop = () => {
  const { shopData } = useContext(ShopContext);

  return (
    <div>
      {
        shopData.map(({id, name}) => (
          <div key={id}>
            <h1>{ name }</h1>
          </div>)
        )
      }
    </div>
  )
}

export default Shop;
