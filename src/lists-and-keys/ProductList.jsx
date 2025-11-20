import { Item } from "./ProductItem";

export const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  );
};
