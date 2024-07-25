import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 1, name: 'product 1' },
    { id: 2, name: 'product 2' },
    { id: 3, name: 'product 3' },
    { id: 4, name: 'product 4' },
  ];
  return (
    <div>
      <h1>Product page</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to="{`/products/{product.id}`}">{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;
