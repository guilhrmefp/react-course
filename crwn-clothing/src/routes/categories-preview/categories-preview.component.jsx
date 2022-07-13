import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="categories-preview-container">
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return <CategoryPreview title={title} products={products} key={title} />
        })
      }
    </div>
  );
}

export default CategoriesPreview;
