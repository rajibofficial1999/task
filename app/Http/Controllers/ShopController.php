<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Models\Tenant;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ShopController extends Controller
{
     public function index(): Response
    {
        $user = Auth::user();

        return Inertia::render('Shops/Index', [
            'shops' => $user->shops,
        ]);
    }
    
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'min:3', 'unique:shops,name'],
        ]);

        $tenant = $this->createTenant($validated['name']);

        $validated['user_id'] = Auth::id();
        $validated['tenant_id'] = $tenant->id;

        Shop::create($validated);

        return redirect()->route('shops.index')->withSuccess('Shop created successfully');
    }

    protected function createTenant(string $tenantName): Tenant
    {
        $subdomain = Str::slug($tenantName);

        $tenant = Tenant::create([
            'name' => $subdomain,
        ]);

        $tenant->domains()->create([
            'domain' => "$subdomain.localhost",
            
        ]);

        return $tenant;
    }
}
