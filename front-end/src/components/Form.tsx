'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import { Button } from './ui/button';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is being submitted
    
    try {
      const response = await axios.post('http://localhost:8000/api/joinus/send', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      alert('Failed to send message!');
    } finally {
      setLoading(false); // Stop loading after submission is complete
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
    <div className="w-full max-w-lg px-6 py-8 my-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        Join us
                      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
  
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
  
        <div>
          <label className="block text-gray-700 mb-2">Contact Number</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
  
        {loading ? (
          <div className="flex justify-center">
            <PulseLoader color="#36d7b7" loading={loading} size={15} />
          </div>
        ) : (
          <Button className="w-full py-3 text-lg bg-blue-900 hover:bg-blue-800 text-white rounded-lg">
            Join
          </Button>
        )}
      </form>
    </div>
  </div>
  
  );
}

export default Form;
