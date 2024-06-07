import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import api from '../../AxiosConfig';
import toast from 'react-hot-toast';

const Navbar2 = ({search, handleChange}) => {

  const router = useNavigate();

  const {state, LOGOUT} = useContext(AuthContext);

  async function Logout() {
    try {
      const response = await api.get("/user/logout");
      if(response.data.success) {
        LOGOUT();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
        <h2>Search Product:</h2>
        <input placeholder="Mens.." value={search} onChange={handleChange} />
        {state?.user?.name && <h1>Hello! {state?.user?.name}</h1>}
        
        <button style={{width: "130px", height: "50px", fontSize: "2px", textAlign: "center"}}>{state?.user?.role ? <h1 onClick={Logout}>Logout</h1> : <h2 onClick={() => router("/login")}>Login</h2>}</button>
        {/* <button onClick={() => router("/profile")}>Login</button> */}
      </div>
  )
}

export default Navbar2
