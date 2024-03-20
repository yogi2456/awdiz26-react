import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
// import MoonIcon from '../Icons/MoonIcon';
// import SunIcon from '../Icons/SunIcon';
// import '../Icons/Icon_darkMode.css'


const Icon_darkMode = () => {

    const { isDarkTheme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
       {/* <MoonIcon /> */}
      <label className="toggle-switch">
        <button
        onChange={() => {
          changeTheme({
            theme: isDarkTheme ? "light" : "dark",
            isDarkTheme: !isDarkTheme,
          });
        }}>LightTheme</button>
        <input placeholder='DarkTheme'
          type="checkbox" 
          checked={isDarkTheme}
          onChange={() => {
            changeTheme({
              theme: isDarkTheme ? "light" : "dark",
              isDarkTheme: !isDarkTheme,
            });
          }}
        />
        <button onChange={() => {
            changeTheme({
              theme: isDarkTheme ? "dark" : "light",
              isDarkTheme: !isDarkTheme,
            });
          }}>DarkTheme</button>
        <span className="switch" />
      </label>
      {/* <SunIcon /> */}
    </div>
  )
}

export default Icon_darkMode
