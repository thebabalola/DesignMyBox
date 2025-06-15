import React from 'react';
import CatalogGrid from '../components/sections/CatalogGrid';

const Catalog = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-cream mb-6">Our Complete Design Portfolio</h1>
    <p className="text-center text-pale-taupe mb-8">
      Explore over 100 completed projects showcasing our expertise across residential, commercial, and renovation spaces.
    </p>
    <CatalogGrid />
  </div>
);

export default Catalog;