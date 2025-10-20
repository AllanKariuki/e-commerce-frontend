import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './wishlistSlice'

import productsReducer from '../slices/productsSlice';
import categoryReducer from '../slices/categorySlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    products: productsReducer,
    categories: categoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch