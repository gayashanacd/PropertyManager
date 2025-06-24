<?php

namespace App\Http\Controllers;
use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Property::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'required',
            'location' => 'required|string',
            'price' => 'required|numeric'
        ]);
        return Property::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property) {
        return $property;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Property $property) {
        $property->update($request->all());
        return $property;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property) {
        $property->delete();
        return response()->noContent();
    }
}
