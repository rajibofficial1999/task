<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant;

class Shop extends Model
{
    use BelongsToTenant;

    protected $fillable = ['name', 'user_id', 'tenant_id'];

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }
}

