import React from 'react'

const AllProducts = (props) => {

    const {awdiz} = props;
    console.log(awdiz, "awdiz")
  return (
    <div>
      <h1>All Products</h1>

      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {awdiz.map((productObj) => (
        <div style={{width: "20%", height: "350px", border: "1px solid black", marginBottom: "30px"}}>
            <img style={{width: "100%", height: "80%"}} src={productObj.image}/>
            <h1>{productObj.name}</h1>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllProducts
