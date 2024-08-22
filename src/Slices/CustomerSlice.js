import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

let CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    // Note Error:Notice that deleteCustomer is outside of reducers object !!
    addCustomer(state, action) {
      state.push(action.payload);
    },

    deleteCustomer(state, action) {
      const deleteIndex = action.payload;
      return state.filter((value, index) => index !== deleteIndex);
      //  Return the value after deleting the item.
    },
    



  },
});








export const { addCustomer, deleteCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
