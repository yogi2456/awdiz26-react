import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FakeStoreSingleProduct = () => {

    const [productData, setProductData] = useState({})

    const { id } = useParams();

    async function getSingleProduct () {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProductData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(id) {
            getSingleProduct()
        }
    }, [id])
  return (
    <div>
      <div>
        <img style={{width: "20%", height: "20%"}} src={productData?.image} alt='image'/>
        <h1>{productData?.title}</h1>
      </div>
    </div>
  )
}

export default FakeStoreSingleProduct
