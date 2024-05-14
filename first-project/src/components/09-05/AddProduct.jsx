import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../../AxiosConfig";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    tags: "",
    image: ""
  });

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
    // console.log(productData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(
        "/product/add-product",
        { productData, userId: "663c645f9d729446c27d98cb" }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setProductData({
          name: "",
          category: "",
          price: "",
          quantity: "",
          tags: "",
          image: ""
        });
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={productData.name}
          placeholder="name"
        />{" "}
        <br />
        <label>Product Image</label>
        <br />
        <input
          type="url"
          name="image"
          onChange={handleChange}
          value={productData.image}
          placeholder="image"
        />
        <br />
        <label>Category:</label> <br />
        <input
          type="category"
          name="category"
          onChange={handleChange}
          value={productData.category}
          placeholder="category"
        />{" "}
        <br />
        <label>Price:</label> <br />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={productData.price}
          placeholder="price"
        />{" "}
        <br />
        <label>Quantity:</label> <br />
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          value={productData.quantity}
          placeholder="quantity"
        />{" "}
        <br />
        <label>Tags:</label> <br />
        <input
          type="text"
          name="tags"
          onChange={handleChange}
          value={productData.tags}
          placeholder="tags"
        />{" "}
        <br /> <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
