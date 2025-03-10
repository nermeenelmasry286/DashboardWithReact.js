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

export const createProduct = createAsyncThunk("products/createProduct", async (product) => {
    const response = await axios.post(baseUrl, product);
    return response.data;
});

export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, product }) => {
    const response = await axios.put(`${baseUrl}/${id}`, product);
    return response.data;
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
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex((product) => product.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            });
    },
});

export default productsSlice.reducer;