import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../api";
import type { Category, CategoryState } from "../../types/product";

const CategoryState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
    total: 0,
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await get<Category[]>('/categories/');
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
)


const categorySlice = createSlice({
    name: 'categories',
    initialState: CategoryState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.total = action.payload.length;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export const selectedCategories = (state: { categories: CategoryState }) => state.categories.categories;
export const totalCategories = (state: { categories: CategoryState }) => state.categories.total;
export const categoryLoading = (state: { categories: CategoryState }) => state.categories.loading;
export const categoryError = (state: { categories: CategoryState }) => state.categories.error;


export default categorySlice.reducer;