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

function App() {
  const [student, setStudent] = useState(["a", "b", "c", "d"])
  const [counter, setCounter] = useState(1234)
  return (
    <div className="App">
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
