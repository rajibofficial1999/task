import { Disclosure } from "@headlessui/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FormEvent } from "react";
import { router, usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";

export default function Navbar({ className = "" }: { className?: string }) {
    const { isAdmin } = usePage().props.auth;

    const handleSignOut = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        isAdmin ? router.post(route("admin.logout")) : router.post("/logout");
    };
    return (
        <>
            <div className="w-full">
                <Disclosure
                    as="nav"
                    className={cn(
                        "bg-sidebar text-sidebar-foreground",
                        className
                    )}
                >
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-end">
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Avatar>
                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                    className="size-10 rounded-full"
                                                />
                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <form onSubmit={handleSignOut}>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <button type="submit">
                                                        Sign out
                                                    </button>
                                                </DropdownMenuItem>
                                            </form>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                </Disclosure>
            </div>
        </>
    );
}
