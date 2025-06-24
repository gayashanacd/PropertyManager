import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from './propertiesSlice';

export default function PropertyList() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.properties);

    useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    if (loading) return <p className="text-gray-500">Loading properties...</p>;

    return (
        <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Properties</h2>
        <div className="grid md:grid-cols-2 gap-4">
            {data.map((prop) => (
            <div
                key={prop.id}
                className="border border-gray-200 p-4 rounded-md shadow-sm bg-gray-50 hover:shadow-lg transition"
            >
                <h3 className="text-lg font-bold text-blue-600">{prop.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{prop.description}</p>
                <p className="text-sm">📍 {prop.location}</p>
                <p className="text-sm">💰 ${Number(prop.price).toLocaleString()}</p>
            </div>
            ))}
        </div>
        </div>
    );
}
