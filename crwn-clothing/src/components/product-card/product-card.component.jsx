import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductCardImg,
  ProductCardFooter,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={name} />

      <ProductCardFooter>
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </ProductCardFooter>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
