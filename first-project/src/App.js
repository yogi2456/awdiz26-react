// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Counter from './components/02-06/Counter';
import Welcome from './components/03-03/Welcome';
import EffectOne from './components/03-03/EffectOne';
import EffectTwo from './components/03-03/EffectTwo';
import EffectThree from './components/03-03/EffectThree';
import EffectFour from './components/03-03/EffectFour';
import Register from './components/06-03/Register';
import UseReduer from './components/09-03/UseReduer';
import PropsDrilling from './components/09-03/PropsDrilling';
import { useState } from 'react';
import AllProducts from './components/10-03/AllProducts';
import FakeStoreAllProducts from './components/10-03/FakeStoreAllProducts';
import Todos from './components/15-03/Todos';
import Todo from './components/15-03/Todo';
import Navbar from './components/global/Navbar';
// import Footer from './components/global/Footer';
import PageNotFound from './components/global/PageNotFound';
import FakeStoreSingleProduct from './components/16-03/FakeStoreSingleProduct';
import Render from './components/16-03/Render';
import CurrencyConverter from './components/17-03/CurrencyConverter';
import React, { useContext } from 'react'
// import styled from "styled-components";
import { ThemeContext } from './components/Context/ThemeContext';
import CounterRedux from './components/20-03/CounterRedux';
// import Icon_darkMode from './components/Icons/Icon_darkMode';

function App() {
  const { themeValue} = useContext(ThemeContext)
  const [student, setStudent] = useState(["a", "b", "c", "d"])
  const [counter, setCounter] = useState(1234)
  const [products, setProducts] = useState([
    { name: "Tshirt", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg", },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11999538/2020/7/16/3559f47b-7b64-4197-85c3-c25d4a8e4d291594905852235SHAVYARedBeigePureSilkWovenDesignBanarasiSareeTshirtsHRXbyHr1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13622286/2024/2/19/a0794667-e541-4526-958d-6c9536a0009b1708340067741RoadsterMenGreenWhiteColourblockedRoundNeckPureCottonT-shirt1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25072090/2023/9/30/6be97619-12fc-40c3-a91b-b5d5f13ba8181696013416163StormbornMenBlackPrintedRawEdgeT-shirt1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27226100/2024/1/29/0d63dbfd-673d-49d0-be10-751fa0d54c0f1706543722864BULLMERMenTribalPrintedAppliqueT-shirt1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24014326/2023/7/14/c3bb4dd9-b557-4602-a885-f77b445645bc1689274870298BULLMERMenBlackTypographyPrintedPocketsT-shirt1.jpg" },
    { name: "Tshirt", image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25823374/2023/11/20/843b68e7-d9e8-41bb-a70b-05354d03f6211700455630978-Roadster-Men-Tshirts-5131700455630675-1.jpg" },
  ])
  return (
    <div className="App">
      {/* <div>
        <AppStyled color={themeValue.body}>
      <TitlePage color={themeValue.text}>Dark Mode</TitlePage>
      <Icon_darkMode></Icon_darkMode>
      </AppStyled>
    </div> */}
      <Navbar/>
      <Routes>
        <Route path='*' element={ <PageNotFound/> } />
        <Route path='/' element={ <Home/> } />
        <Route path='/login' element={ <Login/>} />
        <Route path='/counter' element={ <Counter/>} />
        <Route path='/welcome' element={ <Welcome/>} />
        <Route path='/effectone' element={ <EffectOne/>} />
        <Route path='/effecttwo' element={ <EffectTwo/>} />
        <Route path='/effectthree' element={ <EffectThree/>} />
        <Route path='/effectfour' element={ <EffectFour/>} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/usereducer' element={ <UseReduer/>} />
        <Route path='/propsdrilling' element={ <PropsDrilling student={student} counter={counter}/> } />
        <Route path='/all-products' element={ <AllProducts awdiz={products}/>} />
        <Route path='/fake-store-all-products' element= { <FakeStoreAllProducts/>} />
        <Route path='/todos' element= { <Todos/>} />
        <Route path='/todo' element= { <Todo/>} />
        <Route path='/fake-store-single-product/:id' element= {<FakeStoreSingleProduct/>} />
        <Route path='/render' element={<Render/>}/>
        <Route path='/currency-converter' element={<CurrencyConverter/>} />
        <Route path='/counter-redux' element={<CounterRedux/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;


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
