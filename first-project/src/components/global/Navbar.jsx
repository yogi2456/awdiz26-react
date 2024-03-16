import React from 'react'

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", border: "1px solid black", height: "40px", textAlign: "center"}}>
      <div>Home</div>
      <div>
        <button>Light Theme</button>
        <button>Dark Theme</button>
      </div>
    </div>
  )
}

export default Navbar
