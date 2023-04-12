import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  orignalData :[],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    saveProductData: (state, action) => {
      state.productData = action.payload;
    },
    saveOrignalData: (state, action) => {
      state.orignalData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveProductData, saveOrignalData } = productSlice.actions;

export default productSlice.reducer;
