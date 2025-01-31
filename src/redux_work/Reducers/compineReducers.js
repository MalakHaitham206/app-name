import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import cartReducer from './cartReducer';

export default combineReducers({
   myFavoriteReducer: favoriteReducer,
   cart: cartReducer,
})



