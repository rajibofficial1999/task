<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $products = Product::with('shop', 'category')->whereHas('shop', function($query) use ($user) {
                $query->where('user_id', $user->id);
            })->get();

        return Inertia::render('Products/Index', [
            'products' => $products
        ]);
    }

     public function create(): Response
    {
        $user = Auth::user();

        return Inertia::render('Products/Create', [
            'shops' => $user->shops,
        ]);
    }
    
    public function store(ProductStoreRequest $request): RedirectResponse
    {        
        Product::create($request->validated());

        return redirect()->route('products.index')->withSuccess('Product created successfully');
    }
}
