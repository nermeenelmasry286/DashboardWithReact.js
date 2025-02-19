import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3005/products";


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(baseUrl);
    return response.data;
});


export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
});
export const selectProductById =(state, productId) => state.products.products.find((product) => product.id === productId);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle", 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product.id !== action.payload);
            });
    },
});

export default productsSlice.reducer;