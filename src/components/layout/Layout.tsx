
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle, pageDescription }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {(pageTitle || pageDescription) && (
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {pageTitle && (
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">{pageTitle}</h1>
                )}
                {pageDescription && (
                  <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                    {pageDescription}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
