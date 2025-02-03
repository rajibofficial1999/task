import AuthLayout from "@/Layouts/AuthLayout";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { usePage } from "@inertiajs/react";

const MerchantList = () => {
    const { merchants } = usePage().props;

    return (
        <div className="w-full px-20 h-full mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Merchant List</h1>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-muted bg-muted">
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {merchants?.map((merchant) => (
                        <TableRow key={merchant.id} className="!py-10">
                            <TableCell>{merchant.id}</TableCell>
                            <TableCell>{merchant.name}</TableCell>
                            <TableCell>{merchant.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

MerchantList.layout = (page: any) => <AuthLayout children={page} />;

export default MerchantList;
