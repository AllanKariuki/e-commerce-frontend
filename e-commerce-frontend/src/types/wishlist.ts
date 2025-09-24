export interface WishlistItem {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    brand?: string;
    rating: number;
    reviewCount: number;
    sizes?: string[];
    colors?: string[];
    category: string;
    inStock: boolean;
    dateAdded: string;
}

export interface WishlistState {
    items: WishlistItem[];
    loading: boolean;
    error: string | null;
}