// src/components/AddProduct.tsx
'use client';

import { useState } from 'react';
import { useProductStore } from '@/store/useProductStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AddProduct() {
  const addProduct = useProductStore((state) => state.addProduct);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !price) return;
    addProduct({
      name,
      price: parseFloat(price),
      category: 'Other',
      description: 'Random store item',
      inStock: true,
    });
    setName('');
    setPrice('');
  };

  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg bg-card">
      <h2 className="text-lg font-semibold">Add New Item</h2>
      <Input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        type="number"
        placeholder="Price in INR"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button onClick={handleAdd}>Add to Store</Button>
    </div>
  );
}
