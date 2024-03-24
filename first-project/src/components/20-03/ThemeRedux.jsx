import React from 'react'
import { Light, Dark } from '../redux/actions/Theme.actions'
import { useDispatch, useSelector } from 'react-redux'

const ThemeRedux = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme )
  return (
    <div style={{theme}}>
      <div>
        <h1>Redux Theme</h1>
        <button onClick={() => dispatch(Light())}>Light</button>
        <button onClick={() => dispatch(Dark())}>Dark</button>
      </div>
    </div>
  )
}

export default ThemeRedux
