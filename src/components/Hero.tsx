import React from 'react';
import { Scissors } from 'lucide-react';
import ImageSlider from './hero/ImageSlider';
import FadeIn from './animations/FadeIn';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <ImageSlider />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <FadeIn>
            <div className="flex justify-center items-center mb-8">
              <Scissors className="h-16 w-16 text-pink-500 animate-spin-slow" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Your Dreams, Our Stitches
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Crafting elegance through expert tailoring, bringing your fashion visions to life with precision and care.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <a
              href="#services"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Our Services
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Hero;