import { Link } from "react-router-dom";

import CardProduct from "../../components/layout/CardProduct";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      image: "/images/iphone15.jpg",
      price: 25000000,
    },
    { id: 2, name: "Samsung S24", image: "/images/s24.jpg", price: 22000000 },
  ];
  return (
    <div>
      <div>Đây là trang home</div>
      <div className="row">
        {products.map((p) => (
          <CardProduct
            key={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
