import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ProductDetails = () => {
  const { productId } = useParams();

  const ProductDetails = {
    1: { name: 'Product 1', description: 'Description for product 1' },
    2: { name: 'Product 2', description: 'Description for product 2' },
    3: { name: 'Product 3', description: 'Description for product 3' },
  };
  const product = ProductDetails[productId];
  if (!product) {
    return <div>{<NotFound />}</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};
export default ProductDetails;
