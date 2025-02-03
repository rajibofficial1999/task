import LoadingButton from "@/components/LoadingButton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import Credentials from "../Credentials";

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

const AdminLoginForm = () => {
    const { data, setData, post, errors, processing } = useForm<FormData>({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("admin.login"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Admin account</CardTitle>
                    <CardDescription className="text-center">
                        Sign in to your admin account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            {errors.email && (
                                <div className="text-sm text-red-500">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            {errors.password && (
                                <div className="text-sm text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-4 w-full">
                        <LoadingButton
                            type="submit"
                            loading={processing}
                            className="w-full"
                        >
                            Submit
                        </LoadingButton>

                        <p>
                            Don't have any account?{" "}
                            <Link className="text-blue-500" href="/register">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    <Credentials email="admin@admin.com" password="123456" />
                </CardFooter>
            </Card>
        </form>
    );
};

export default AdminLoginForm;
