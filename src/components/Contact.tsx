import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-pink-600 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 9909621912</p>
                  <p className="text-gray-600">+91 6353103019</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-pink-600 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">banshidhartailors@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-pink-600 mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">Shop number 2,Kant and Kant Building near Palika Garden<br />Anand 388120,Gujarat,India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-pink-600 mt-1" />
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 08:00 AM - 8:00 PM<br />Sunday: half day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;