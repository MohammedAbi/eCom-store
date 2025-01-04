import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Initial state with an empty products array
  searchTerm: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "products", // Slice name for action type prefixes
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload; // Update products with payload data
    },
    setsearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setsearchTerm } = productSlice.actions; // Export actions
export default productSlice.reducer; // Export reducer
