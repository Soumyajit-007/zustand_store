// src/app/page.tsx
import { AddProduct } from '@/components/AddProduct';
import { ProductList } from '@/components/ProductList';

export default function StorePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Fake Store Inventory</h1>
        <p className="text-muted-foreground">Manage your random items and pricing</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="lg:col-span-1">
          <AddProduct />
        </aside>
        <main className="lg:col-span-2">
          <ProductList />
        </main>
      </div>
    </div>
  );
}