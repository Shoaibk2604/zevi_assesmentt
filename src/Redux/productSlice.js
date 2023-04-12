import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    saveProductData: (state, action) => {
      state.productData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveProductData } = productSlice.actions;

export default productSlice.reducer;
