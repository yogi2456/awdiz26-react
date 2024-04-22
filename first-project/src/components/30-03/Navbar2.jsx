import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar2 = ({search, handleChange}) => {

  const router = useNavigate();
  return (
    <div>
        {/* <h2>Search Product:</h2>
        <input placeholder="Mens.." value={search} onChange={handleChange} /> */}

        <button onClick={() => router("/profile")}>Login</button>
      </div>
  )
}

export default Navbar2
