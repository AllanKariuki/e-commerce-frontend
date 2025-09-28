export interface Product {
    id: number,
    name: string,
    description: string,
    price: string,
    units_in_stock: number,
    image: string | null,
    category: number
}

export interface Category {
    name: string,
    description: string,
}

export interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    loading: boolean;
    error: string | null;
    total: number;
}

export interface CategoryState {
    categories: Category[];
    loading: boolean;
    error: string | null;
    total: number;
}