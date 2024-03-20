import React from 'react'
// import { ThemeContext } from '../Context/ThemeContext'
// import styled from "styled-components";

const Navbar = () => {

  // const { themeValue} = useContext(ThemeContext)

  return (
    <div>
        {/* <AppStyled color={themeValue.body}>
      <TitlePage color={themeValue.text}>Dark Mode</TitlePage>
      <Icon_darkMode></Icon_darkMode>
      </AppStyled> */}
      <div>
        {/* <button onClick={themeValue}>LightTheme</button> */}
      </div>
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
