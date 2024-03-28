import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/Root.themeReducer";

const stores = configureStore({ reducer: rootReducer})

export default stores;