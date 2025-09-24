import type { WishlistItem } from '../types/wishlist';

// Import images
import coolDenim from '../assets/images/cool-denim.jpg';
import hoodie from '../assets/images/hoodie.jpg';
import sweatShirt from '../assets/images/sweat-shirt.jpg';
import woolenDenim from '../assets/images/woolen-denim.jpg';
import cargoPants from '../assets/images/cargo-pants.jpg';
import stayInTouch1 from '../assets/images/stay-in-touch-1.jpg';
import stayInTouch2 from '../assets/images/stay-in-touch-2.jpg';
import stayInTouch3 from '../assets/images/stay-in-touch-3jpg.jpg';

export const sampleWishlistItems: Omit<WishlistItem, 'dateAdded'>[] = [
    {
        id: 'w1',
        name: 'Premium Hoodie - Comfortable and Stylish',
        price: 89.99,
        originalPrice: 119.99,
        image: hoodie,
        brand: 'Urban Style',
        rating: 4.2,
        reviewCount: 128,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Gray', 'Navy'],
        category: 'Hoodies',
        inStock: true,
        dateAdded: '',
    },
    {
        id: 'w2',
        name: 'Cool Denim Jacket - Vintage Style',
        price: 149.99,
        originalPrice: 199.99,
        image: coolDenim,
        brand: 'Denim Co',
        rating: 4.5,
        reviewCount: 89,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Blue', 'Light Blue', 'Dark Blue'],
        category: 'Jackets',
        inStock: true,
        dateAdded: '',
    },
    {
        id: 'w3',
        name: 'Cozy Sweat Shirt - Perfect for Casual Days',
        price: 79.99,
        originalPrice: 99.99,
        image: sweatShirt,
        brand: 'Comfort Zone',
        rating: 4.3,
        reviewCount: 156,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White', 'Gray', 'Black', 'Navy'],
        category: 'Sweatshirts',
        inStock: false,
    },
    {
        id: 'w4',
        name: 'Woolen Denim - Premium Quality',
        price: 199.99,
        image: woolenDenim,
        brand: 'Premium Denim',
        rating: 4.7,
        reviewCount: 67,
        sizes: ['28', '30', '32', '34', '36'],
        colors: ['Blue', 'Black', 'Gray'],
        category: 'Jeans',
        inStock: true,
        dateAdded: '',
    },
    {
        id: 'w5',
        name: 'Cargo Pants - Utility and Style Combined',
        price: 119.99,
        originalPrice: 149.99,
        image: cargoPants,
        brand: 'Outdoor Gear',
        rating: 4.1,
        reviewCount: 203,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Khaki', 'Black', 'Olive', 'Navy'],
        category: 'Pants',
        inStock: true,
        dateAdded: '',
    },
    {
        id: 'w6',
        name: 'Classic Button Down Shirt',
        price: 69.99,
        originalPrice: 89.99,
        image: stayInTouch1,
        brand: 'Classic Wear',
        rating: 4.4,
        reviewCount: 112,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White', 'Blue', 'Black', 'Gray'],
        category: 'Shirts',
        inStock: true,
        dateAdded: '',
    },
    {
        id: 'w7',
        name: 'Casual Summer Tee',
        price: 39.99,
        image: stayInTouch2,
        brand: 'Summer Vibes',
        rating: 4.0,
        reviewCount: 88,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White', 'Gray', 'Black', 'Navy', 'Red'],
        category: 'T-Shirts',
        inStock: true,
        dateAdded: '',
    },
    {
        id: 'w8',
        name: 'Elegant Formal Shirt',
        price: 99.99,
        originalPrice: 129.99,
        image: stayInTouch3,
        brand: 'Formal Elegance',
        rating: 4.6,
        reviewCount: 145,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Light Blue', 'Pink', 'Gray'],
        category: 'Formal Shirts',
        inStock: false,
    },
];

export const addSampleWishlistItems = () => {
    return sampleWishlistItems.map(item => ({
        ...item,
        dateAdded: new Date().toISOString(),
    }));
};