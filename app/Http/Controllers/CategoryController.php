<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Shop;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $categories = Category::with('shop')->whereHas('shop', function($query) use ($user) {
            $query->where('user_id', $user->id);
        })->get();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }

     public function create(): Response
    {
        $user = Auth::user();

        return Inertia::render('Categories/Create', [
            'shops' => $user->shops,
        ]);
    }
    
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', 'min:3'],
            'shop_id' => ['required', 'numeric', 'exists:shops,id'],
        ]);

        Category::create($request->all());

        return redirect()->route('categories.index')->withSuccess('Category created successfully');
    }

    public function shopCategories(Shop $shop): JsonResponse
    {
        return response()->json($shop->categories, 200);
    }
}
