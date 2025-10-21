import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './wishlistSlice'

import productsReducer from '../slices/productsSlice';
import categoryReducer from '../slices/categorySlice';
import recentViewsReducer from '../slices/recentViewsSlice';
import cartReducer from '../slices/cartSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    products: productsReducer,
    categories: categoryReducer,
    recentViews: recentViewsReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch