import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data/products';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Get filter parameters
  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category') || '';
  const inStockOnly = searchParams.get('inStock') === 'true';

  let filteredProducts = products;

  // Filter by search query
  if (query) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(product =>
      product.category === category
    );
  }

  // Filter by stock status
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter(product =>
      product.inStock
    );
  }

  // Add artificial delay to simulate network
  await new Promise(resolve => setTimeout(resolve, 300));

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length
  });
}