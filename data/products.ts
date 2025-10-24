export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  inStock: boolean;
  category: 'Books' | 'Electronics' | 'Home' | 'Clothing';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'The Complete Guide to JavaScript',
    price: 3200,
    imageUrl: '/images/p1.jpg',
    rating: 5,
    inStock: true,
    category: 'Books'
  },
  {
    id: '2',
    name: 'Wireless Bluetooth Headphones',
    price: 12800,
    imageUrl: '/images/p2.jpg',
    rating: 4,
    inStock: true,
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Cotton Throw Blanket',
    price: 4500,
    imageUrl: '/images/p3.jpg',
    rating: 5,
    inStock: false,
    category: 'Home'
  },
  {
    id: '4',
    name: 'Vintage Denim Jacket',
    price: 8900,
    imageUrl: '/images/p4.jpg',
    rating: 3,
    inStock: true,
    category: 'Clothing'
  },
  {
    id: '5',
    name: 'Smart Home Security Camera',
    price: 15600,
    imageUrl: '/images/p5.jpg',
    rating: 4,
    inStock: true,
    category: 'Electronics'
  },
  {
    id: '6',
    name: 'Learn React in 30 Days',
    price: 2800,
    imageUrl: '/images/p6.jpg',
    rating: 4,
    inStock: true,
    category: 'Books'
  },
  {
    id: '7',
    name: 'Ceramic Coffee Mug Set',
    price: 3400,
    imageUrl: '/images/p7.jpg',
    rating: 5,
    inStock: false,
    category: 'Home'
  },
  {
    id: '8',
    name: 'Organic Cotton T-Shirt',
    price: 2400,
    imageUrl: '/images/p8.jpg',
    rating: 4,
    inStock: true,
    category: 'Clothing'
  },
  {
    id: '9',
    name: 'MacBook Pro M2 Laptop',
    price: 189000,
    imageUrl: '/images/p1.jpg',
    rating: 5,
    inStock: true,
    category: 'Electronics'
  },
  {
    id: '10',
    name: 'Design Patterns Book',
    price: 4100,
    imageUrl: '/images/p2.jpg',
    rating: 5,
    inStock: true,
    category: 'Books'
  },
  {
    id: '11',
    name: 'Minimalist Desk Lamp',
    price: 6700,
    imageUrl: '/images/p3.jpg',
    rating: 4,
    inStock: false,
    category: 'Home'
  },
  {
    id: '12',
    name: 'Running Shoes',
    price: 11200,
    imageUrl: '/images/p4.jpg',
    rating: 4,
    inStock: true,
    category: 'Clothing'
  },
  {
    id: '13',
    name: 'Mechanical Keyboard',
    price: 14500,
    imageUrl: '/images/p5.jpg',
    rating: 5,
    inStock: true,
    category: 'Electronics'
  },
  {
    id: '14',
    name: 'Node.js Masterclass',
    price: 3600,
    imageUrl: '/images/p6.jpg',
    rating: 4,
    inStock: true,
    category: 'Books'
  },
  {
    id: '15',
    name: 'Bamboo Cutting Board',
    price: 2900,
    imageUrl: '/images/p7.jpg',
    rating: 5,
    inStock: true,
    category: 'Home'
  },
  {
    id: '16',
    name: 'Wool Winter Scarf',
    price: 3800,
    imageUrl: '/images/p8.jpg',
    rating: 3,
    inStock: true,
    category: 'Clothing'
  },
  {
    id: '17',
    name: 'Portable Power Bank',
    price: 4200,
    imageUrl: '/images/p1.jpg',
    rating: 4,
    inStock: false,
    category: 'Electronics'
  },
  {
    id: '18',
    name: 'Python for Beginners',
    price: 2700,
    imageUrl: '/images/p2.jpg',
    rating: 4,
    inStock: true,
    category: 'Books'
  },
  {
    id: '19',
    name: 'Essential Oil Diffuser',
    price: 5400,
    imageUrl: '/images/p3.jpg',
    rating: 5,
    inStock: true,
    category: 'Home'
  },
  {
    id: '20',
    name: 'Leather Wallet',
    price: 6800,
    imageUrl: '/images/p4.jpg',
    rating: 4,
    inStock: true,
    category: 'Clothing'
  }
];