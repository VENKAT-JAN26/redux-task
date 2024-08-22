import { configureStore } from '@reduxjs/toolkit';
import CustomerReducer from './Slices/CustomerSlice'; 
import counterReducer from "./Slices/CounterSlice";



const store = configureStore({
  devTools: true, // security :after deployed live time use it: false 
  reducer: {
    customers: CustomerReducer,
    counter: counterReducer,

    
  },
});

export default store;

    