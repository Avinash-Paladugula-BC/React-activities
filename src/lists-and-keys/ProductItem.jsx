export const Item = ({ product }) => {
  const handleClick = () => {
    console.log(product.name);
  };

  return (
    <li>
      {product.name} price is : {product.price}
      <button onClick={handleClick}>
        Click to print on console
      </button>
    </li>
  );
};
