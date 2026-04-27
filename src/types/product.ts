// src/types/product.ts
export type Category = 'Electronics' | 'Clothing' | 'Home' | 'Other';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  inStock: boolean;
}

export interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}