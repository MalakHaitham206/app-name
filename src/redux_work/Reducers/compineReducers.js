import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";


export default combineReducers({
   myFavoriteReducer: favoriteReducer,
})