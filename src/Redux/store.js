import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './settingsSlice';
import personalDataReducer from './personalDataSlice';

export const Store = configureStore({
//set reducers
reducer:{
settings:settingsReducer,
personalData:personalDataReducer
}
})