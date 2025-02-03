import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="w-full overflow-hidden">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full flex flex-col">
                        <div className="w-full">
                            <SidebarTrigger className="md:hidden" />
                            <Navbar />
                        </div>
                        <div className="w-full h-full flex justify-center items-center overflow-hidden">
                            {children}
                        </div>
                    </main>
                </SidebarProvider>
                <Toaster />
            </ThemeProvider>
        </div>
    );
}
