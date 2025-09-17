import CardProduct from "../../components/layout/CardProduct";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      image: "/images/iphone15.jpg",
      price: 25000000,
      type: "laptop",
    },
    {
      id: 2,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "phone",
    },
    {
      id: 3,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "smartwatch",
    },
    {
      id: 4,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "phone",
    },
    {
      id: 5,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "phone",
    },
    {
      id: 6,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "phone",
    },
    {
      id: 7,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "phone",
    },
    {
      id: 8,
      name: "Samsung S24",
      image: "/images/s24.jpg",
      price: 22000000,
      type: "phone",
    },
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
            type={p.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
