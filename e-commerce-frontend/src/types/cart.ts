import type { Product } from "./product";

export interface CartItemType {
    item: Product;
    size: string;
    color: string;
    quantity: number;
    total: number;
}

export interface Cart {
    items: CartItemType[];
    subtotal: number;
    discount: number;
    deliveryFee: number;
    totalAmount: number;
}

export interface CartState {
    cart: Cart;
    isLoading: boolean;
    error: string | null;
}