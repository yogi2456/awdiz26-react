import React, { useContext, useEffect, useState } from 'react'
import api from '../../AxiosConfig';
import { AuthContext } from '../Context/AuthContext';

const YourProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    const { state } = useContext(AuthContext);


    useEffect(() => {
      async function getProducts() {
        try {
          const response = await api.post("/api/v1/product/get-product-by-seller", { userId: state?.user?._id});
          if(response.data.success){
            setAllProducts(response.data.products)
          }
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [state])
  return (
    <div>
      <h1>All Products</h1>

{allProducts.length?  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
 {allProducts.map((productObj) => (
   <div style={{width: "22%", height: "350px", border: "1px solid black", marginBottom: "30px"}}>
       <img style={{width: "100%", height: "40%", padding: "10px"}} src={productObj.image} alt=''/>
       <h1 style={{fontSize: "12px"}}>Name: {productObj.name}</h1>
       <p>Category: {productObj.category}</p>
       <p>Price: {productObj.price}/-</p>
       <p>Total Quantity: {productObj.quantity}</p>
       <p>Tags: {productObj.tags}</p>
   </div>
 ))}
 </div>: <div>Loading..</div>}
    </div>
  )
}

export default YourProducts
