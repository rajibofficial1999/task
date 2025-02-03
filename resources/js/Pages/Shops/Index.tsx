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
import { Shop } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const ShopList = () => {
    const {
        shops,
        message: { success },
    } = usePage().props;

    useEffect(() => {
        success && toast(success);
    }, [success]);
    return (
        <div className="w-full h-full mt-10 px-20">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Store List</h1>
                <Link href={route("shops.create")}>
                    <Button variant="link">
                        Create store <MoveRight />
                    </Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-muted bg-muted">
                        <TableHead>ID</TableHead>
                        <TableHead>Store Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {shops?.map((shop: Shop) => (
                        <TableRow key={shop.id} className="!py-10">
                            <TableCell>{shop.id}</TableCell>
                            <TableCell>{shop.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

ShopList.layout = (page: any) => <AuthLayout children={page} />;

export default ShopList;
