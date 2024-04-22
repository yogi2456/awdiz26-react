import React from 'react'
// import { ThemeContext } from '../Context/ThemeContext'
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const router = useNavigate();


  // const { themeValue} = useContext(ThemeContext)

  return (
    // <div>
    //     {/* <AppStyled color={themeValue.body}>
    //   <TitlePage color={themeValue.text}>Dark Mode</TitlePage>
    //   <Icon_darkMode></Icon_darkMode>
    //   </AppStyled> */}
    //   <div>
    //     {/* <button onClick={themeValue}>LightTheme</button> */}
    //   </div>
    //   <button onClick={() => router("/profile")}>Login</button>
    // </div>

    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</nav>

<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar bg-primary" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
    </div>
  )
}

export default Navbar


// const AppStyled = styled.div`
//   width: 100%;
//   height: 100vh;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.color};
//   transition: all 0.25s ease;
// `;

// const TitlePage = styled.h1`
//   color: ${(props) => props.color};
//   font-size: 3.125rem;
//   margin-bottom: 1.25rem;
// `;
