export interface Image {
    id: number;
    image: string | null;
    is_main: boolean;
    product: number;
}

export interface Review {
    product: number;
    user: number;
    rating: number;
    comment: string;
    created_at: string;
}

export interface Product {
    id: number,
    name: string,
    description: string,
    price: string,
    units_in_stock: number,
    image: string | null,
    category_name: number,
    main_image: Image | null,
    product_images: Image[] | [],
    sizes: string[] | [],
    colors: string[] | [],
    material?: string | null,
    reviews: Review[] | [],
    rating?: number,
    original_price?: string | null,
    brand?: string | null,
    discount_percentage?: number | null,
    discount?: number | null,
}

export interface Category {
    name: string,
    description: string,
}

export interface Pagination {
    next: any;
    previous: any;
    count: number;
    total_pages: number;
    current_page: number;
    page_size: number;
    has_next: boolean;
    has_previous: boolean;
}

export interface ProductState {
    products: Product[];
    pagination: Pagination | {};
    selectedProduct: Product | null;
    loading: boolean;
    error: string | null;
    total: number;
}

export interface ProductsResponse {
    pagination: Pagination;
    products: Product[];
}

export interface CategoryState {
    categories: Category[];
    loading: boolean;
    error: string | null;
    total: number;
}