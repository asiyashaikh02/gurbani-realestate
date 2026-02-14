import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you. Mohit Gurbani will contact you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-midnight rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Text Side */}
          <div className="md:w-5/12 p-12 flex flex-col justify-center bg-midnight relative overflow-hidden">
             {/* Abstract gold lines */}
             <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/30"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/30"></div>

            <h3 className="font-serif text-3xl font-bold text-white mb-6">Begin Your Journey</h3>
            <p className="text-platinum mb-8 font-sans font-light">
              Whether you are looking for a dream home or a high-return asset, let's discuss how we can achieve your goals.
            </p>
            
            <div className="space-y-4 font-sans text-sm text-gold tracking-wider">
              <p>+91 98765 43210</p>
              <p>contact@gurbaniproperties.com</p>
              <p>Civil Lines, Nagpur, MH</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 bg-white p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors font-serif text-midnight"
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Phone</label>
                    <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors font-serif text-midnight"
                    placeholder="+91"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Budget Range</label>
                    <select 
                        name="budget"
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors font-serif text-midnight bg-transparent"
                        onChange={handleChange}
                    >
                        <option value="">Select Range</option>
                        <option value="50L-1Cr">₹50L - ₹1 Cr</option>
                        <option value="1Cr-3Cr">₹1 Cr - ₹3 Cr</option>
                        <option value="3Cr+">₹3 Cr+</option>
                    </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Requirement Details</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors font-serif text-midnight resize-none"
                  placeholder="I am interested in..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="pt-4">
                <Button fullWidth type="submit">
                    Request Consultation
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;