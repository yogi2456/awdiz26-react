import counterReducer from "./Counter.reducer";
import themeReducer from "./Theme.reducer.js";
// import ThemeReducer from '../reducers/Theme.reducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    //auth: authReducer
});

export default rootReducer;