import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    loading?: boolean;
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link";
    size?: "default" | "icon" | "sm" | "lg";
    children: ReactNode;
}

export default function LoadingButton({
    className,
    variant,
    size,
    loading = false,
    children,
    ...props
}: LoadingButtonProps) {
    return (
        <Button
            variant={variant ?? "default"}
            size={size ?? "default"}
            className={className}
            {...props}
            disabled={loading}
        >
            {loading && <LoaderCircle className="size-4 animate-spin" />}
            {children}
        </Button>
    );
}
