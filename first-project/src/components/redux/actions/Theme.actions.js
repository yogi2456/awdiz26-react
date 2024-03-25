// export const Light = function () {
//     return { type: "LIGHT" }
// }

// export const Dark = function () {
//     return { type: "DARK" }
// }
// import { CHANGETHEME } from '../ActionsType'

// export const ChangeTheme = type => ({
//     type: CHANGETHEME,
//     payload: type,
// })

export const SET_DARK_THEME = "SET_DARK_THEME"

export const setTheme = (theme) => (dispatch) => {
    dispatch({
        type:SET_DARK_THEME,
        payload:theme
    });
};