import React, { useContext, useEffect, useState } from 'react'
import { MyCounterContext } from './Context/CounterContext';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom'
import api from '../AxiosConfig';
// import { ThemeContext } from './Context/ThemeContext';

const Home = () => {

    const router = useNavigate();

    const {counter, Increment, Decrement, Reset} = useContext(MyCounterContext)
    const { state, LOGOUT } = useContext(AuthContext)
    // const { changeTheme } = useContext(ThemeContext);

    const [allProducts, setAllProducts] = useState([]);


    useEffect(() => {
      async function getProducts() {
        try {
          const response = await api.get("/product/get-all-products");
          if(response.data.success){
            setAllProducts(response.data.products)
          }
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }, [])

    return (
        <>
        {/* <div>
            <h1>Home Page</h1>
            <h1>UserName - {state?.user?.name}</h1>
            <button onClick={() => router('/login')}>Login</button>
            <button onClick={LOGOUT}>Logout</button>
            <h2>Counter : {counter}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div> */}

        <div>
      <h1 style={{marginTop: "70px"}}>All Products</h1>

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
        </>
        
    )
}

export default Home;



