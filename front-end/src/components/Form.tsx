"use client";
import React, { useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { Button } from "./ui/button";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is being submitted

    try {
      const response = await axios.post(
        "http://localhost:8000/api/joinus/send",
        formData
      );
      alert(response.data.message);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      alert("Failed to send message!");
      console.log(error);
    } finally {
      setLoading(false); // Stop loading after submission is complete
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400">
      <div className="w-full max-w-xl px-8 py-12 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border-2 border-white/20">
        <div className="space-y-2 mb-8">
          <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Join Our Innovation Hub
          </h2>
          <div className="h-1.5 w-40 bg-blue-600 rounded-full" />
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="block font-medium text-blue-900">Full Name</label>
            <input
              type="text"
              className="w-full h-12 px-6 py border-2 border-blue-100 rounded-xl focus:border-blue-300 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="block font-medium text-blue-900">Email</label>
            <input
              type="email"
              className="w-full h-12 px-6 py border-2 border-blue-100 rounded-xl focus:border-blue-300 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="block font-medium text-blue-900">
              Contact Number
            </label>
            <input
              type="text"
              className="w-full h-12 px-6 py border-2 border-blue-100 rounded-xl focus:border-blue-300 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {loading ? (
            <div className="flex justify-center pt-4">
              <PulseLoader color="#1e3a8a" loading={loading} size={15} />
            </div>
          ) : (
            <Button
              className="h-12 py-5 text-xl bg-blue-900 hover:bg-blue-800 hover:scale-[1.02] transition-transform rounded-xl shadow-lg"
              variant="default"
            >
              Join Us
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
