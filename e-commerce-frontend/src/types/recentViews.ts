import type { Product } from "./product";

export interface RecentViewState {
    items: Product[];
    loading: boolean;
    error: string | null;
}