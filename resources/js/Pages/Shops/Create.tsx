import LoadingButton from "@/components/LoadingButton";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

interface FormData {
    name: string;
}

const Create = () => {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        name: "",
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("shops.store"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-[450px] border-0">
                <CardHeader>
                    <CardTitle>Create shop</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Shop name</Label>
                            <Input
                                id="name"
                                placeholder="Name"
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
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-end gap-4">
                    <LoadingButton type="submit" loading={processing}>
                        Submit
                    </LoadingButton>
                </CardFooter>
            </Card>
        </form>
    );
};

Create.layout = (page: any) => <AuthLayout children={page} />;

export default Create;
