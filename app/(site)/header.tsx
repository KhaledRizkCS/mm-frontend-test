import Link from 'next/link';
// INTENTIONAL PROBLEM: over-broad icon import for just one icon
import * as Icons from '../components/icons';

export default function Header() {
  return (
    <header style={{ 
      background: '#f8f9fa', 
      borderBottom: '1px solid #dee2e6',
      padding: '16px 24px' // Different spacing than other parts - intentional inconsistency
    }}>
      <div className="container">
        <div className="flex" style={{ 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333',
            textDecoration: 'none'
          }}>
            ShopCatalog
          </Link>
          
          <nav>
            <div className="flex" style={{ gap: '20px', alignItems: 'center' }}>
              <Link href="/products" style={{ color: '#666' }}>
                Products
              </Link>
              
              {/* Fake cart icon with inconsistent styling */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px', // More magic numbers - different from globals
                background: '#007bff',
                color: 'white',
                borderRadius: '5px', // Different radius than other elements
                fontSize: '0.9rem'
              }}>
                <Icons.CartIcon />
                <span>Cart (2)</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}