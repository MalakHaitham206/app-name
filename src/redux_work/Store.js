import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension'; 
import combineReducers from './Reducers/compineReducers';
import { configureStore } from "@reduxjs/toolkit";

const store = createStore(combineReducers, composeWithDevTools());

export default store;