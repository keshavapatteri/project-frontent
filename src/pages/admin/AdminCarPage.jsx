import React, { useState } from 'react';
import { axiosInstance } from '../../../config/axiosinstance';

const AdminCarForm = () => {
  const [carData, setCarData] = useState({
    title: '',
    model: '',
    Year: '',
    priceperday: '',
    capacity: '',
    fuel: '',
    transmission: '',
    milege: '',
    status: '',
    color: '',
    registrationnumber: '',
    location: '',
    insurancedetails: '',
  });

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/car/add', carData);
      alert(response.data.message);
      setCarData({
        title: '',
        model: '',
        Year: '',
        priceperday: '',
        capacity: '',
        fuel: '',
        transmission: '',
        milege: '',
        status: '',
        color: '',
        registrationnumber: '',
        location: '',
        insurancedetails: '',
      });
    } catch (error) {
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      alert('Failed to add car. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={carData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          placeholder="Model"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="Year"
          value={carData.Year}
          onChange={handleChange}
          placeholder="Year"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="priceperday"
          value={carData.priceperday}
          onChange={handleChange}
          placeholder="Price per Day"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="capacity"
          value={carData.capacity}
          onChange={handleChange}
          placeholder="Capacity"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="fuel"
          value={carData.fuel}
          onChange={handleChange}
          placeholder="Fuel"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="transmission"
          value={carData.transmission}
          onChange={handleChange}
          placeholder="Transmission"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="milege"
          value={carData.milege}
          onChange={handleChange}
          placeholder="Milege"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="status"
          value={carData.status}
          onChange={handleChange}
          placeholder="Status"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="color"
          value={carData.color}
          onChange={handleChange}
          placeholder="Color"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="registrationnumber"
          value={carData.registrationnumber}
          onChange={handleChange}
          placeholder="Registration Number"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
          value={carData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="insurancedetails"
          value={carData.insurancedetails}
          onChange={handleChange}
          placeholder="Insurance Details"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AdminCarForm;
