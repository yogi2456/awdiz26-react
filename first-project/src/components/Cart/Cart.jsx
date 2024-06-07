import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import api from "../../AxiosConfig";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {

    // const router = useNavigate();

    // const productId = useParams();
    const [cartProducts, setCartProducts] = useState([]);

    console.log(cartProducts, "cartProducts")

    const {state} = useContext(AuthContext);

    async function getYourCartProducts() {
        try {
            // const { data } = await axios.get('https://fakestoreapi.com/products');
            const response = await api.post('/api/v1/user/cart', {id: state?.user?.id});
            // console.log(data, "data here")
            if (response.data.success) {
                setCartProducts(response.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteProduct(productId) {
        try {
            const response = await api.post('/api/v1/user/delete-cart', { productId, userId: state?.user?.id })
            if (response.data.success) {
                toast.success(response.data.message)
                setCartProducts(response.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // if(!state?.user?._id) {
        //     toast.error("please login to access your cart products, redirecting your login page in 3 sec.")
        //     setTimeout(() => {
        //         router("/login")
        //     }, 3000)
        //   } else {
        //     if(state?.user?.id) {
        //         getYourCartProducts()
        //     }
        // }

        async function getYourCartProducts() {
            try {
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const response = await api.post('/api/v1/user/cart', {userId : state?.user?._id,});
                // console.log(data, "data here")
                if (response.data.success) {
                    setCartProducts(response.data.products)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getYourCartProducts();
    }, [state])
  return (
    <div>
            <h1>Cart</h1>
            {cartProducts.length ? <div style={{display: "flex", justifyContent: "space-around"}}>
                {cartProducts.map((product) => (
                    <div>
                        <img style={{width: "50%", height: "50%"}} alt='..' src={product.image} />
                        <h1>{product.name}</h1>
                        <h1>${product.price}/-</h1>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
        </div>
  )
}

export default Cart
