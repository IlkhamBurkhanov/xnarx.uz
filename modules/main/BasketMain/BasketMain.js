import { useEffect, useState } from "react";
import { Checkbox, Button, Card, Typography, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const img = process.env.NEXT_PUBLIC_IMG;

const BasketMain = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState({});

    // Load liked products from localStorage when the component mounts
    useEffect(() => {
        const storedLikedProducts = JSON.parse(localStorage.getItem("LikedProducts")) || [];
        setLikedProducts(storedLikedProducts);

        // Initialize all products to be selected by default
        const initialSelectedProducts = storedLikedProducts.reduce((acc, product) => {
            acc[product.id] = true; // Set each product as selected
            return acc;
        }, {});

        setSelectedProducts(initialSelectedProducts);
    }, []);

    // Function to remove a product from the basket (localStorage)
    const handleRemove = (id) => {
        const updatedLikedProducts = likedProducts.filter((product) => product.id !== id);
        setLikedProducts(updatedLikedProducts);
        localStorage.setItem("LikedProducts", JSON.stringify(updatedLikedProducts));

        // Remove selection if the product is removed
        const newSelectedProducts = { ...selectedProducts };
        delete newSelectedProducts[id];
        setSelectedProducts(newSelectedProducts);
    };

    // Toggle selection of a product
    const toggleSelect = (id) => {
        setSelectedProducts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Select or deselect all products
    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        const newSelections = likedProducts.reduce((acc, product) => {
            acc[product.id] = isChecked; // Set selection based on the checkbox status
            return acc;
        }, {});
        setSelectedProducts(newSelections);
    };

    // Calculate total price of selected products
    const totalPrice = likedProducts.reduce((acc, product) => {
        return acc + (selectedProducts[product.id] ? product.price : 0);
    }, 0);
return (
      <div className="min-h-screen bg-orange-100 md:p-6 p-2 mt-20">

        {/* Select All Section */}

        {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-2">

              <Card
                  title={"Korzinka"}
                  className="bg-white w-full md:col-span-2 shadow-lg rounded-lg flex flex-col"
                  bordered={true}
                  hoverable
              >
                  <div className="flex items-center mb-4">
                      <Checkbox onChange={handleSelectAll}>Select All {likedProducts.length}</Checkbox>
                      <Button
                          type="danger"
                          icon={<DeleteOutlined className={"text-red-500"} />}

                          onClick={() => {
                              const remainingProducts = likedProducts.filter(
                                  (product) => !selectedProducts[product.id]
                              );
                              setLikedProducts(remainingProducts);
                              localStorage.setItem("LikedProducts", JSON.stringify(remainingProducts));
                              setSelectedProducts({});
                          }}
                      >
                          Delete Selected
                      </Button>
                  </div>


                  {likedProducts.map((product) => (
                      <div key={product.id} className={" border py-2 px-3 rounded flex justify-start items-center gap-x-2 mt-3"}>
                          <Checkbox
                              checked={!!selectedProducts[product.id]}
                              onChange={() => toggleSelect(product.id)}
                              className="mb-2"
                          />

                              <img
                                  className="mt-2 items-center w-[75px] h-[75px] object-contain cursor-pointer"
                                  src={`${img}${product?.image}`}
                                  alt="product_image"
                                  width={75}
                                  height={75}
                              />

                          <div className="">
                              <Title level={4} className="text-lg font-semibold">
                                  {product.name_uz}
                              </Title>
                              <Text className="text-orange-500 font-bold">
                                  Price: {product.price}
                              </Text>
                              <Button
                                  onClick={() => handleRemove(product.id)}
                                  type="danger"
                                  className=""
                              >
                                  <DeleteOutlined className={"text-red-500 mt-0.5"} />
                                  Remove
                              </Button>
                              {/* Store Links */}
                              <Space className="mt-2">
                                  <Button type="link" href={product.storeLink1} target="_blank">
                                      See more
                                  </Button>
                              </Space>
                          </div>

                      </div>))}
              </Card>
              <Card styles={{body: {padding: 0}}} title={"Your Order"}
                    className="w-full md:col-span-1 bg-white rounded-lg shadow-lg">

                  <div className={"p-5 "}>
                      <Text className={"text-lg font-semibold" +
                          ""}>Total Products: {likedProducts.length}</Text>
                      <br/>
                      <Text>Total Price: {totalPrice}</Text>
                  </div>
              </Card>

          </div>

          {/* Order Summary */}

      </div>
  );
};

export default BasketMain;
