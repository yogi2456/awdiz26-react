import React, { useState } from 'react'
import { createContext } from 'react'

export const MyCounterContext = createContext();

const ProviderCounterContext = ( { children }) => {

    const [counter, setCounter] = useState(1)

    function Increment () {
        setCounter(counter + 1)
    }

    function Decrement () {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    function Reset () {
        setCounter(0)
    }
  return (
    <div>
      <MyCounterContext.Provider value={ { counter, Increment, Decrement, Reset }}>
        { children }
    </MyCounterContext.Provider>
    </div>
  )
}

export default ProviderCounterContext
