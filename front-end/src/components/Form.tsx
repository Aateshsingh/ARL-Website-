'use client'
import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      const response = await axios.post('http://localhost:8000/api/email/send', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message!');
    } finally {
      setLoading(false); // Stop loading after submission is complete
    }
  };

  return (
    <div className="flex justify-around pb-10 offwhite py-10">
      <div>
        <p className="darkblue text-4xl font-medium">Leave us a message</p>
        <form className="flex flex-col w-96" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="formbtn relative flex items-center justify-center" type="submit">
            {loading ? (
              <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
      <div className="bgdarkblue">
        <p className="text-5xl font-bold text-white px-32 py-10">Get in Touch</p>
        <p className="text-center text-white text-lg">arl.corporate.team@gmail.com</p>
        <div className="social flex gap-3 mt-20 justify-center">
          <a href="/"><img className="h-10 invert" src="/facebook.png" alt="Facebook" /></a>
          <a href="/"><img className="h-10 invert" src="/twitter.png" alt="Twitter" /></a>
          <a href="/"><img className="h-10 invert" src="/insta.png" alt="Instagram" /></a>
          <a href="/"><img className="h-10 invert" src="/website.png" alt="Website" /></a>
        </div>
      </div>
    </div>
  );
}

export default Form;
