import AuthLayout from "@/Layouts/AuthLayout";
import { Button } from "@/components/ui/button";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link, usePage } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const ProductList = () => {
    const {
        products,
        message: { success },
    } = usePage().props;

    useEffect(() => {
        success && toast(success);
    }, [success]);

    return (
        <div className="w-full px-20 h-full mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Product List</h1>
                <Link href={route("products.create")}>
                    <Button variant="link">
                        Create Product <MoveRight />
                    </Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-muted bg-muted">
                        <TableHead>ID</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category Name</TableHead>
                        <TableHead>Store Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product.id} className="!py-10">
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product?.category?.name}</TableCell>
                            <TableCell>{product?.shop?.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

ProductList.layout = (page: any) => <AuthLayout children={page} />;

export default ProductList;
