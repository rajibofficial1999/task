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

const CategoryList = () => {
    const {
        categories,
        message: { success },
    } = usePage().props;

    useEffect(() => {
        success && toast(success);
    }, [success]);

    return (
        <div className="w-full px-20 h-full mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Category List</h1>
                <Link href={route("categories.create")}>
                    <Button variant="link">
                        Create category <MoveRight />
                    </Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-muted bg-muted">
                        <TableHead>ID</TableHead>
                        <TableHead>Store Name</TableHead>
                        <TableHead>Category Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories?.map((category) => (
                        <TableRow key={category.id} className="!py-10">
                            <TableCell>{category.id}</TableCell>
                            <TableCell>{category?.shop?.name}</TableCell>
                            <TableCell>{category.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

CategoryList.layout = (page: any) => <AuthLayout children={page} />;

export default CategoryList;
