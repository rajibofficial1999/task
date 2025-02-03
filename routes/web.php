<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;

Route::group(["domain" => config("tenancy.central_domains.0")], function() {

    Route::get('/', function() {
        return redirect()->route('login');
    });

    Route::middleware(['guest', 'guest:admin'])->group(function () {
        Route::inertia("login", 'Auth/Login');
        Route::inertia("register", 'Auth/Register');
    });

    Route::middleware('auth')->group(function () {
        Route::get('/merchant/store-list', [ShopController::class, 'index'])->name('shops.index');
        Route::inertia('/merchant/shops/create', "Shops/Create")->name('shops.create');
        Route::post('/merchant/shops', [ShopController::class, 'store'])->name('shops.store');

        Route::get('/merchant/category-list', [CategoryController::class, 'index'])->name('categories.index');
        Route::get('/merchant/categories/create', [CategoryController::class, 'create'])->name('categories.create');
        Route::post('/merchant/categories', [CategoryController::class, 'store'])->name('categories.store');

        Route::get('/merchant/product-list', [ProductController::class, 'index'])->name('products.index');
        Route::get('/merchant/products/create', [ProductController::class, 'create'])->name('products.create');
        Route::post('/merchant/products', [ProductController::class, 'store'])->name('products.store');
    });
});

require __DIR__.'/auth.php';
