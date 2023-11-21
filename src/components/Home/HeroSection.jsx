import React, { useState, useEffect } from 'react';
import imagesData from '../API/HeroImages.json';

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change images every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const imageHeight = `${imagesData[currentImageIndex].height}px`; // Replace 'height' with the actual image height property

  return (
    <div className="relative" style={{ height: imageHeight }}>
      {imagesData.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover cursor-pointer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
           {/*  <p className="text-2xl font-bold text-white">{image.caption}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
