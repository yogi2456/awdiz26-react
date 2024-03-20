import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

const darkTheme = {
  body: "#1c1c1c",
  icon: "#ffffffca",
  text: "white",
  tableColor: "#0c0c0c",
  cellColor: "#1c1c1c",
  textColor: "white",
};
// light
const lightTheme = {
  body: "#fff",
  icon: "#1c1c1c",
  text: "#1c1c1c",
  tableColor: "#f9fafb",
  cellColor: "#e9ecef",
  textColor: "black",
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_THEME":
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
}

const InitialState = { theme : "light", isDarkTheme: false }

const ThemeContextComponent = (props) => {

    const [state, dispatch] = useReducer(reducer, InitialState)

    function changeTheme (value) {
        dispatch({ type : "SET_THEME", payload: value})
    }

  return (
    <div>
      <ThemeContext.Provider value={{
        themeValue: state.isDarkTheme ? darkTheme : lightTheme,
        isDarkTheme: state.isDarkTheme,
        changeTheme,}}
        >
        { props.children }
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContextComponent
