'use client';

import { useState, useEffect } from 'react';
import styles from './products.module.css';
import * as Icons from '../components/icons';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  inStock: boolean;
  category: 'Books' | 'Electronics' | 'Home' | 'Clothing';
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [inStock, setInStock] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams();
        if (query) params.append('q', query);
        if (category) params.append('category', category);
        if (inStock) params.append('inStock', 'true');

        const response = await fetch(`/api/products?${params}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [query, category, inStock]);

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Product Catalog
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Discover our amazing products
        </p>
      </div>

      {/* TODO: Sync filters with URL (useSearchParams/useRouter) */}
      <div className={styles.filters}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '4px' }}
        >
          <option value="">All Categories</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
          <option value="Home">Home</option>
          <option value="Clothing">Clothing</option>
        </select>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            id="inStockFilter"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          <span onClick={() => setInStock(!inStock)} style={{ cursor: 'pointer' }}>
            In Stock Only
          </span>
        </div>
      </div>

      {products.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
          No products found
        </div>
      ) : (
        <div className={styles.grid}>
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className={styles.productTile} style={{ padding: 13 }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '12px' }}
              />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{product.name}</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '8px' }}>
                ¥{product.price.toLocaleString()}
              </p>
              <p style={{ color: '#666', marginBottom: '12px' }}>
                Rating: {product.rating}/5
              </p>
              <p style={{ 
                color: product.inStock ? '#28a745' : '#dc3545', 
                marginBottom: '16px',
                fontWeight: '500' 
              }}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
              <div
                onClick={() => alert(`Added ${product.name} to cart`)}
                style={{
                  background: '#007bff',
                  color: 'white',
                  padding: '10px 16px',
                  textAlign: 'center',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Add to Cart
              </div>
            </div>
          ))}

          {products.slice(3, 6).map((product) => (
            <div key={product.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px', // Different padding than above
              background: 'white'
            }}>
              <img
                src={product.imageUrl}
                alt=""
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <div style={{ marginTop: '14px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{product.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333' }}>
                    ¥{product.price.toLocaleString()}
                  </span>
                  <div>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} style={{ color: i < product.rating ? '#ffd700' : '#ddd' }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  style={{
                    width: '100%',
                    background: product.inStock ? '#28a745' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '4px',
                    cursor: product.inStock ? 'pointer' : 'not-allowed',
                    fontSize: '0.95rem'
                  }}
                  disabled={!product.inStock}
                  onClick={() => alert(`Added ${product.name} to cart`)}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}

          {products.slice(6).map((product) => (
            <div key={product.id} style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'white',
              padding: '0' // No padding on container
            }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '18px' }}>
                <h2 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '10px',
                  color: '#333'
                }}>{product.name}</h2>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '14px'
                }}>
                  <span style={{ 
                    fontSize: '1.6rem', 
                    fontWeight: 'bold', 
                    color: '#007bff' 
                  }}>
                    ¥{product.price.toLocaleString()}
                  </span>
                  <Icons.StarIcon />
                  <span style={{ color: '#666' }}>{product.rating}</span>
                </div>
                <div
                  onClick={() => alert(`Added ${product.name} to cart`)}
                  style={{
                    background: 'linear-gradient(45deg, #007bff, #0056b3)',
                    color: 'white',
                    padding: '14px 20px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Add to Cart
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}