import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItemType } from "../../types/cart";

const initialState: CartState = {
    cart: {
        items: [],
        subtotal: 0,
        discount: 0,
        deliveryFee: 0,
        totalAmount: 0,
    },
    isLoading: false,
    error: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItemType>) => {
            state.cart.items.push(action.payload);
            state.cart.subtotal += action.payload.total;
            state.cart.totalAmount += action.payload.total;
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cart.items.findIndex(item => item.item.id === action.payload);
            if (itemIndex !== -1) {
                const itemTotal = state.cart.items[itemIndex].total;
                state.cart.items.splice(itemIndex, 1);
                state.cart.subtotal -= itemTotal;
                state.cart.totalAmount -= itemTotal;
            }
        },
        clearCart: (state) => {
            state.cart.items = [];
            state.cart.subtotal = 0;
            state.cart.totalAmount = 0;
            state.cart.discount = 0;
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: number, quantity: number}>) => {
            const itemIndex = state.cart.items.findIndex(item => item.item.id === action.payload.id);
            if (itemIndex !== -1) {
                const currentItem = state.cart.items[itemIndex];

                const oldTotal = currentItem.total;

                // Update item quantity
                currentItem.quantity = action.payload.quantity;
                currentItem.total = currentItem.item.price * action.payload.quantity;

                // Update totals
                const totalDifference = currentItem.total - oldTotal;
                state.cart.subtotal += totalDifference;
                state.cart.totalAmount += totalDifference;
            }
        }
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    updateItemQuantity
} = cartSlice.actions;

export const cartItems = (state: { cart: CartState }): CartItemType[] => {
    return state.cart.cart.items;
}

export const cartSubtotal = (state: { cart: CartState }): number => {
    return state.cart.cart.subtotal;
}

export const cartTotalAmount = (state: { cart: CartState }): number => {
    return state.cart.cart.totalAmount;
}

export const cartDeliveryFee = (state: { cart: CartState }): number => {
    return state.cart.cart.deliveryFee;
}

export const cartDiscount = (state: { cart: CartState }): number => {
    return state.cart.cart.discount;
}

export const cartIsLoading = (state: { cart: CartState }): boolean => {
    return state.cart.isLoading;
}

export const cartError = (state: { cart: CartState }): string | null => {
    return state.cart.error;
}

export default cartSlice.reducer;