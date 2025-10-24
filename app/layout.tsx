import './globals.css';
import Header from './(site)/header';

export const metadata = {
  title: 'Product Catalog - Frontend Interview',
  description: 'A product catalog application for frontend interviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Skip to content link - commented out for candidate to enable/fix */}
        {/* <a href="#main-content" className="skip-link">Skip to content</a> */}
        
        <Header />
        
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}