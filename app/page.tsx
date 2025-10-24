import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div className="text-center">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Product Catalog
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
          Welcome to our product catalog application
        </p>
        <Link 
          href="/products"
          style={{
            display: 'inline-block',
            background: '#007bff',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '1.1rem',
            textDecoration: 'none'
          }}
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}