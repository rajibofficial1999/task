import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AdminLoginForm from "@/components/Auth/AdminLoginForm";
import MerchantLoginForm from "@/components/Auth/MerchantLoginForm";
import GuestLayout from "@/Layouts/GuestLayout";

const Login = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <Tabs defaultValue="merchant" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="merchant">Merchant</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                </TabsList>
                <TabsContent value="admin">
                    <AdminLoginForm />
                </TabsContent>
                <TabsContent value="merchant">
                    <MerchantLoginForm />
                </TabsContent>
            </Tabs>
        </div>
    );
};

Login.layout = (page: any) => <GuestLayout children={page} />;

export default Login;
