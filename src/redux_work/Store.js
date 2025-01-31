import { createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension'; 
import thunk from 'redux-thunk';
import cartSlice from './Reducers/cartReducer'; 
import combineReducers from './Reducers/compineReducers';
import { configureStore } from "@reduxjs/toolkit";







const store = configureStore({
  reducer: combineReducers, 
  devTools: process.env.NODE_ENV !== 'production', 
});

export default store;