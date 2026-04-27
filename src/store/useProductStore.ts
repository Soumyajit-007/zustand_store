// src/store/useProductStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Product, ProductState } from '@/types/product';

export const useProductStore = create<ProductState>()(
  devtools(
    persist(
      (set) => ({
        products: [],

        addProduct: (data) =>
          set((state) => ({
            products: [
              ...state.products,
              { ...data, id: uuidv4() },
            ],
          })),

        updateProduct: (id, updates) =>
          set((state) => ({
            products: state.products.map((p) =>
              p.id === id ? { ...p, ...updates } : p
            ),
          })),

        deleteProduct: (id) =>
          set((state) => ({
            products: state.products.filter((p) => p.id !== id),
          })),
      }),
      { name: 'store-inventory' }
    )
  )
);