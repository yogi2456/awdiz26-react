const ChangeTheme =  {
    light: {
        background: "white",
        color: "black",
    },
    dark: {
        background: "black",
        color: "white",
    },
};


const initialState = { theme : ChangeTheme.light }

const themeReducer = function (state = initialState, action) {
    switch(action.type) {
        case "LIGHT": 
            return {...state, theme: ChangeTheme.light };
        case "DARK":
            return {...state, theme: ChangeTheme.dark };
        default:
            return state;        
    }
}

export default themeReducer;

























// import { CHANGETHEME } from "../ActionsType";

// const ThemeReducer = (state = false, action) => {
//     switch(action.type) {
//         case CHANGETHEME:
//             return action.payload;
//         default: 
//             return state;    
//     }
// };

// export default ThemeReducer;


// import { SET_DARK_THEME } from "../actions/Theme.actions";

// const initialState = {
//     theme: "light",
// };

// const themeReducer = (state = initialState, actions) => {
//     switch (actions.type) {
//         case SET_DARK_THEME:
//             return {...state, theme: actions.payload };
    
//         default:
//             return state;
//     }
// };

// export default themeReducer;