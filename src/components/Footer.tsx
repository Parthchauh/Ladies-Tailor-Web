import React from 'react';
import { Facebook, Instagram, Twitter, Scissors, Heart } from 'lucide-react';

const Footer = () => {
  const links = {
    quickLinks: [
      { name: 'Get Started', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Book Appointment', href: '#' },
      { name: 'Home', href: '#' },
      { name: 'Tailor Near Me', href: '#' }
    ],
    services: [
      { name: 'Tailoring For Women', href: '#' },
      { name: 'Tailoring For Kids', href: '#' },
      { name: 'Online Tailoring Service', href: '#' },
      { name: 'Online Blouse Stitching', href: '#' }
    ],
    legal: [
      { name: 'Shopping Policies', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Scissors className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-semibold text-white">Bansidhar Tailors</span>
            </div>
            <p className="text-sm">
              Crafting elegance through expert tailoring since 2000. Your trusted partner in fashion and home decor.
            </p>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="hover:text-pink-500 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="flex items-center text-sm">
              Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> in India
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className="text-center text-sm mt-4">
            &copy; {new Date().getFullYear()} Bansidhar Ladies Tailors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;