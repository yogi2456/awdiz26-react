import React from 'react'
// import { TouchableOpacity, Text } from 'react-native'
import { Light, Dark } from '../redux/actions/Theme.actions'
import { useDispatch, useSelector } from 'react-redux'

const ThemeRedux = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme )

    // const LightTheme = () => {
    //   dispatch(Light());
    // }

    // const DarkTheme = () => {
    //   dispatch(Dark());
    // }

  return (
    <div style={{theme}}>
      <div>
        <h1>Redux Theme</h1>
        {/* <button onClick={() => dispatch(Light())}>Light</button>
        <button onClick={() => dispatch(Dark())}>Dark</button> */}
        <button onPress={theme === Light ? "Dark" : "Light"}>Apply a dark theme</button>
      </div>
    </div>

    // <div>
    //   <h1 style={{color: theme === "Dark"? "white": "black"}}>change The Theme</h1>
    //   <h2 style={{color: theme === "Dark"? "white": "black"}}>Using Redux</h2>
    //   <button onClick={LightTheme} disabled={theme === "LIGHT"}>Light Theme</button>
    //   <button onClick={DarkTheme} disabled={theme === "DARK"}>Dark Theme</button>
    // </div>
  )
}

export default ThemeRedux
