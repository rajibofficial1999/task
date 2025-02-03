<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Category;
use App\Models\Product;
use App\Models\Shop;
use App\Models\Tenant;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Admin::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
        ]);

        foreach(range(1, 5) as $i){
            $name = "shop{$i}";
            $tenant = Tenant::create([
                'name' => $name,
            ]);

            $tenant->domains()->create([
                'domain' => "$name.localhost",
                
            ]);

            Shop::create([
                'name' => $name,
                'tenant_id' => $tenant->id,
                'user_id' => User::inRandomOrder()->first()->id,
            ]);
        }

        Category::factory(35)->create();

        Product::factory(100)->create();
    }
}
