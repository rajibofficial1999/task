import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import { Home, LayoutList, ListCheck, ListOrdered } from "lucide-react";
import { useEffect, useState } from "react";

interface SidebarItem {
    title: string;
    url: string;
    icon: React.FC<any>;
}
const adminItems: SidebarItem[] = [
    {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: Home,
    },
];

const merchantItems: SidebarItem[] = [
    {
        title: "Stores",
        url: "/merchant/store-list",
        icon: ListOrdered,
    },
    {
        title: "Categories",
        url: "/merchant/category-list",
        icon: ListCheck,
    },
    {
        title: "Products",
        url: "/merchant/product-list",
        icon: LayoutList,
    },
];

export function AppSidebar() {
    const { user, isAdmin } = usePage().props.auth;
    const { url } = usePage();

    const [sidebarLists, setSidebarLists] = useState<SidebarItem[]>([]);

    useEffect(() => {
        if (isAdmin) {
            setSidebarLists(adminItems);
        } else {
            setSidebarLists(merchantItems);
        }
    }, [user, isAdmin]);

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <Link
                            href={
                                user.role === "admin"
                                    ? "/admin/dashboard"
                                    : "/merchant/store-list"
                            }
                        >
                            <img
                                src="/images/logo.svg"
                                alt="logo"
                                width={150}
                                height={150}
                            />
                        </Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="mt-5">
                        <SidebarMenu>
                            {sidebarLists.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="py-5"
                                        isActive={url.startsWith(item.url)}
                                    >
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
