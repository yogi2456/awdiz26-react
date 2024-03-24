const ChangeTheme =  {
    light: {
        background: "#eee",
        color: "#333",
    },
    dark: {
        background: "#333",
        color: "#eee",
    },
};


const InitialState = { theme : ChangeTheme.light }

const themeReducer = function (state = InitialState, action) {
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