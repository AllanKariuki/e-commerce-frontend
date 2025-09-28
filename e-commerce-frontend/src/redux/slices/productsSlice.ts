import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../../types/product";
import { get } from "../../api";

const ProductState: ProductState = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
    total: 0
}


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params: { page?: number; limit?: number; category?: number; search?: string } = {}, { rejectWithValue }) => {
        try {
            console.log('Fetching products');
            
            const query = new URLSearchParams();
            if (params.page) query.append('page', params.page.toString());
            if (params.limit) query.append('limit', params.limit.toString());
            if (params.category) query.append('category', params.category.toString());
            if (params.search) query.append('search', params.search);
            
            const queryString = query.toString();
            const url = queryString ? `/products?${queryString}` : '/products';
            const response = await get<Product[]>(url);
            return response;
        } catch (error: any) {
            console.log('Error fetching products:', error);
            
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch products'
            )
        }
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await get<Product>(`/products/${id}`);
            return response;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch product'
            );
        }
    }
);


const productsSlice = createSlice({
    name: 'products',
    initialState: ProductState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.total = action.payload.length;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
});

export const selectProducts = (state: { products: ProductState }) => state.products.products;
export const selectTotalProducts = (state: { products: ProductState }) => state.products.total;
export const selectedProduct = (state: { products: ProductState }) => state.products.selectedProduct

export const {} = productsSlice.actions;
export default productsSlice.reducer;