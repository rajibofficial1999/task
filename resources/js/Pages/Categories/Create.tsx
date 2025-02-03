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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent } from "react";

interface FormData {
    name: string;
    shop_id: string;
}

const Create = () => {
    const { shops } = usePage().props;

    const { data, setData, post, processing, errors } = useForm<FormData>({
        name: "",
        shop_id: "",
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("categories.store"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-[450px] border-0">
                <CardHeader>
                    <CardTitle>Create category</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Category name</Label>
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

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="shop">Shops</Label>
                            <Select
                                value={data.shop_id}
                                onValueChange={(value) =>
                                    setData("shop_id", value)
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a shop" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {shops?.map((shop) => (
                                            <SelectItem
                                                key={shop.id}
                                                value={shop.id.toString()}
                                            >
                                                {shop.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {errors.shop_id && (
                                <div className="text-sm text-red-500">
                                    {errors.shop_id}
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

Create.layout = (page: any) => <AuthLayout>{page}</AuthLayout>;

export default Create;
