import React from 'react';
import { Scissors, Shirt, Sofa, Ruler } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Custom Dresses",
      description: "Bespoke women's wear tailored to your style and measurements.",
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Alterations & Repairs",
      description: "Expert garment alterations and repair services.",
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Curtain Stitching",
      description: "Custom curtains and drapes for your home.",
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Sofa Covers",
      description: "Made-to-measure sofa covers and upholstery.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We offer a wide range of tailoring services to meet all your fashion and home decor needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;