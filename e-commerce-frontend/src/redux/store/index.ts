import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './wishlistSlice'

import productsReducer from '../slices/productsSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    products: productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch