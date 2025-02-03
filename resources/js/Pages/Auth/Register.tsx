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
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const Register = () => {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/register");
    };
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-center">Sign up</CardTitle>
                        <CardDescription className="text-center">
                            Create new merchant account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                {errors.name && (
                                    <div className="text-sm text-red-500">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
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
                                    onChange={(e) => {
                                        setData("password", e.target.value);
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        );
                                    }}
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
                        <LoadingButton
                            type="submit"
                            loading={processing}
                            className="w-full"
                        >
                            Submit
                        </LoadingButton>

                        <p>
                            Already have an account?{" "}
                            <Link className="text-blue-500" href="/login">
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

Register.layout = (page: any) => <GuestLayout children={page} />;

export default Register;
