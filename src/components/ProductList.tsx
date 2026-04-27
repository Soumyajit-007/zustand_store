// src/components/ProductList.tsx
'use client';

import { useProductStore } from '@/store/useProductStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Tag } from 'lucide-react';
import { useHasHydrated } from '@/hooks/useHydration';

const inrCurrencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
});

export function ProductList() {
  const { products, deleteProduct, updateProduct } = useProductStore();
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) return <p>Loading store...</p>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">{product.name}</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inrCurrencyFormatter.format(product.price)}</div>
            <p className="text-xs text-muted-foreground mb-4">{product.category}</p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => updateProduct(product.id, { price: product.price + 10 })}
              >
                + Rs. 10
              </Button>
              <Button 
                variant="destructive" 
                size="icon" 
                onClick={() => deleteProduct(product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
