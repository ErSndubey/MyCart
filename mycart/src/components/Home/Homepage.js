import React from 'react';
import Header from '../common/Header';
import CategorySubcategory from './CategorySubcategory'
import HeroSection from './HeroSection';
import FeaturedProductsSection from './FeaturedProductsSection';
import TopOffers from './TopOffers';


import Footer from '../common/Footer';
import TestComponent from '../TestComponet';

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <CategorySubcategory/>
      <HeroSection />
      <FeaturedProductsSection />
      <TopOffers />
   <TestComponent/>
      <Footer />
    </div>
  );
};

export default Homepage;
