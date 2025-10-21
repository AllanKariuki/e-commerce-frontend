import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItemType } from "../../types/cart";

const initialState: CartState = {
    cart: {
        items: [],
        subtotal: 0,
        discount: 0,
        percentageDiscount: 0,
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
            console.log('Current cart state before adding item:', state.cart);
            console.log('Adding item to cart:', action.payload);

            const existingItemIndex = state.cart.items.findIndex(
                item => 
                    item.item.id === action.payload.item.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            )

            if (existingItemIndex !== -1) {
                // If item exists, update quantity and total
                const existingItem = state.cart.items[existingItemIndex];
                const newQuantity = existingItem.quantity + action.payload.quantity;
                // lets get the new total value
                const newTotal = parseFloat(existingItem.item.price) * newQuantity;
                const oldTotal = existingItem.total;

                existingItem.quantity = newQuantity;
                existingItem.total = newTotal;

                // update subtotal and totalAmount
                const totalDifference = newTotal - oldTotal;
                state.cart.subtotal += totalDifference;
                state.cart.totalAmount += totalDifference;

                // Update discounts if applicable
                if (action.payload.item.discount || action.payload.item.discount_percentage) {
                    const discountDifference = (action.payload.item.discount || 0) * action.payload.quantity;
                    const percentageDiscountDifference = (action.payload.item.discount_percentage || 0) * action.payload.quantity;

                    state.cart.discount += discountDifference;
                    state.cart.percentageDiscount += percentageDiscountDifference;
                }
                
            } else {
                state.cart.items.push(action.payload);
                state.cart.subtotal += action.payload.total;
                state.cart.totalAmount += action.payload.total;
                if (action.payload.item.discount || action.payload.item.discount_percentage) {
                    state.cart.discount += action.payload.item.discount || 0;
                    state.cart.percentageDiscount += action.payload.item.discount_percentage || 0;
                }
            }

            console.log('Updated cart state after adding item:', state.cart);
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
                currentItem.total = parseFloat(currentItem.item.price) * action.payload.quantity;

                // Update totals
                const totalDifference = currentItem.total - oldTotal;
                state.cart.subtotal += totalDifference;
                state.cart.totalAmount += totalDifference;

                // Update dicsounts and percentage discount if applicable
                if (currentItem.item.discount || currentItem.item.discount_percentage) {
                    const oldDiscount = (currentItem.item.discount || 0) * (oldTotal / (parseFloat(currentItem.item.price) * (oldTotal / currentItem.quantity)));
                    const newDiscount = (currentItem.item.discount || 0) * (currentItem.total / (parseFloat(currentItem.item.price) * currentItem.quantity));
                    state.cart.discount += (newDiscount - oldDiscount);
                }
                if (currentItem.item.discount_percentage) {
                    const oldPercentageDiscount = currentItem.item.discount_percentage * (oldTotal / (parseFloat(currentItem.item.price) * (oldTotal / currentItem.quantity)));
                    const newPercentageDiscount = currentItem.item.discount_percentage * (currentItem.total / (parseFloat(currentItem.item.price) * currentItem.quantity));
                    state.cart.percentageDiscount += (newPercentageDiscount - oldPercentageDiscount);
                }
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
export const cartPercentageDiscount = (state: { cart: CartState }): number => {
    return state.cart.cart.percentageDiscount;
}

export const cartItemsCount = (state: { cart: CartState }): number => {
    return state.cart.cart.items.length;
}


export default cartSlice.reducer;