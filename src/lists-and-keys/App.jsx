import {ProductList} from "./ProductList";

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Monitor", price: 30000 },
    { id: 3, name: "Keyboard", price: 5000 },
    { id: 4, name: "Mouse", price: 2000 },
    { id: 5, name: "Bottle", price: 200 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
};

export default App;