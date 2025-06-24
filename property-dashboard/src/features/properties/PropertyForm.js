import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProperty } from './propertiesSlice';

export default function PropertyForm() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProperty({ ...formData, price: parseFloat(formData.price) }));
        setFormData({ title: '', description: '', location: '', price: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Add New Property</h2>

        <div>
            <label className="block text-sm font-medium text-gray-600">Title</label>
            <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-600">Location</label>
            <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-600">Price</label>
            <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
            Add Property
        </button>
        </form>
    );
}
