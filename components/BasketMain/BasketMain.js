import { useEffect, useState } from "react";

const BasketMain = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  // Load liked products from localStorage when the component mounts
  useEffect(() => {
    const storedLikedProducts =
      JSON.parse(localStorage.getItem("LikedProducts")) || [];
    setLikedProducts(storedLikedProducts);
  }, []);

  // Function to remove a product from the basket (localStorage)
  const handleRemove = (id) => {
    const updatedLikedProducts = likedProducts.filter(
      (product) => product.id !== id
    );
    setLikedProducts(updatedLikedProducts);
    localStorage.setItem("LikedProducts", JSON.stringify(updatedLikedProducts));
  };

  return (
    <div className="min-h-screen bg-orange-100 p-6">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Your Basket
      </h1>

      {likedProducts.length === 0 ? (
        <p className="text-center text-orange-600">Your basket is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {likedProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="text-orange-500 font-bold mt-2">
                Price: {product.price}
              </p>

              <button
                onClick={() => handleRemove(product.id)}
                className="bg-orange-500 text-white py-2 px-4 mt-4 rounded hover:bg-orange-600 w-full"
              >
                Remove from Basket
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BasketMain;
