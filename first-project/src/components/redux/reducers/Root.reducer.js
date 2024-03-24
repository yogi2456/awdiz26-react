import counterReducer from "./Counter.reducer";
import themeReducer from "./Theme.reducer.js";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    //auth: authReducer
});

export default rootReducer;