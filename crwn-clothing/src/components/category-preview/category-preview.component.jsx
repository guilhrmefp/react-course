import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewList,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          { title.toUpperCase() }
        </CategoryPreviewTitle>
      </h2>

      <CategoryPreviewList>
        {
          products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </CategoryPreviewList>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
