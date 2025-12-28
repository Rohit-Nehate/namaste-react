import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./slice";

const appStore = configureStore({
 reducer: {
    fav: favReducer
 }
});
export default appStore;