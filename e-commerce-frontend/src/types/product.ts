export interface ImageResponse {
    id: number;
    image: string | null;
    is_main: boolean;
    product: number;
}

export interface Product {
    id: number,
    name: string,
    description: string,
    price: string,
    units_in_stock: number,
    image: string | null,
    category_name: number,
    main_image: ImageResponse,
    product_images: ImageResponse[],
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