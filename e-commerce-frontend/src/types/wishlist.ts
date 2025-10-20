import type { Product } from './product';
export interface WishlistItem extends Product {
    dateAdded: string;
}

export interface WishlistState {
    items: WishlistItem[];
    loading: boolean;
    error: string | null;
}