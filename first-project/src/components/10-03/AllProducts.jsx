import React, { useEffect, useState } from 'react'
import api from '../../AxiosConfig';

const AllProducts = (props) => {

    const {awdiz} = props;
    console.log(awdiz, "awdiz")

    const [products, setProducts] = useState([]);


    useEffect(() => {
      async function getProducts() {
        try {
          const response = await api.get("/api/v1/product/get-all-products");
          if(response.data.success){
            setProducts(response.data.products)
          }
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [])
  return (
    <div>
      <h1>All Products</h1>

     {products.length?  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {products.map((productObj) => (
        <div style={{width: "22%", height: "400px", border: "1px solid black", marginBottom: "30px"}}>
            <img style={{width: "100%", height: "40%", padding: "10px"}} src={productObj.image} alt=''/>
            <h1 style={{fontSize: "12px"}}>Name: {productObj.name}</h1>
            <p>Category: {productObj.category}</p>
            <p>Price: {productObj.price}/-</p>
            <p>Total Quantity: {productObj.quantity}</p>
            <p>Tags: {productObj.tags}</p>
        </div>
      ))}
      </div>: <div>Loading..</div>}

      {/* <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {awdiz.map((productObj) => (
        <div style={{width: "20%", height: "350px", border: "1px solid black", marginBottom: "30px"}}>
            <img style={{width: "100%", height: "80%"}} src={productObj.image} alt=''/>
            <h1>{productObj.name}</h1>
        </div>
      ))}
      </div> */}
    </div>
  )
}

export default AllProducts
