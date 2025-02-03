export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    role: string;
}

export interface Shop {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    user_id: number;
    user?: User;
    categories?: Category[];
}

export interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    shop_id: number;
    shop?: Shop;
    products?: Product[];
}

export interface Product {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    category_id: number;
    shop_id: number;
    shop?: Shop;
    category?: Shop;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
        isAdmin: boolean;
    };

    message: {
        success: string | null;
    };

    shops?: Shop[];

    categories?: Category[];

    products?: Product[];

    merchants?: User[];
};
