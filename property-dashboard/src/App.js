import React from 'react';
import PropertyList from './features/properties/PropertyList';
import PropertyForm from './features/properties/PropertyForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          🏡 Property Manager
        </h1>
        <PropertyForm />
        <hr className="my-6 border-gray-300" />
        <PropertyList />
      </div>
    </div>
  );
}

export default App;
