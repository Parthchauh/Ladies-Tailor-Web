import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            About Bansidhar Ladies Tailors
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1612690669207-fed642192c40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Tailoring workshop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              With over two decades of experience in the art of tailoring, Bansidhar Ladies Tailors has been crafting beautiful garments that perfectly blend traditional expertise with contemporary fashion.
            </p>
            <p className="text-lg text-gray-700">
              Our skilled artisans specialize in creating elegant women's dresses, providing expert alterations, and crafting beautiful home furnishings including curtains and sofa covers.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">20+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">5000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;