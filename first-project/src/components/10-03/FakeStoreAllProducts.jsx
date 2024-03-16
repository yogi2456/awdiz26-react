import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FakeStoreAllProducts = () => {

    const router = useNavigate();

    const [allProducts, setAllProducts] = useState([])
    console.log(allProducts, "allProducts")

    async function getProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
             // console.log(response, "response from fakestore api")
            if(response?.data.length) {
                setAllProducts(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getProducts()
    })

    function redirect (id) {
        router(`/fake-store-single-product/${id}`)
    }
  return (
    <div>
            <h1>Fake Store All Products</h1>
            {allProducts?.length ? <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
                {allProducts.map((productObj) => (
                    <div onClick={() => redirect(productObj.id)} style={{ width: "18%", border: "2px solid black", height: "250px" }}>
                        <img style={{ height: "50%", width: '50%' }} src={productObj.image} />
                        <h1 style={{fontSize: "18px"}}>{productObj.title}</h1>
                    </div>
                ))}
            </div> : <div>Loading...</div>}
        </div>
  )
}

export default FakeStoreAllProducts
