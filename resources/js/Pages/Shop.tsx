import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ThemeProvider } from "@/providers/theme-provider";
import { Link, usePage } from "@inertiajs/react";

export default function Shop() {
    const { shops } = usePage().props;
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen">
                <nav className="flex justify-between items-center bg-purple-500 px-5 py-3">
                    <Link href="/">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            width={150}
                            height={150}
                        />
                    </Link>
                </nav>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {shops?.map((shop) => (
                            <div key={shop.id}>
                                {shop.categories?.map((category) => (
                                    <div key={category.id} className="mt-5">
                                        <h2 className="text-lg text-primary font-semibold capitalize mb-3">
                                            {category.name}
                                        </h2>

                                        <div className="pl-5 grid grid-cols-4 gap-5">
                                            {category.products?.map(
                                                (product) => (
                                                    <Card key={product.id}>
                                                        <CardContent className="mt-4">
                                                            <p className="text-center">
                                                                {product.name}
                                                            </p>
                                                        </CardContent>
                                                        <CardFooter>
                                                            <Button
                                                                className="w-full"
                                                                size="sm"
                                                            >
                                                                Buy now
                                                            </Button>
                                                        </CardFooter>
                                                    </Card>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
}
