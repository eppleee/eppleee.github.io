import * as React from 'react';
import { cn } from "./utils.ts";

function Card({
    className,
    ...props }
    : React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn("rounded-lg border bg-card text-card-foreground shadow-sm p-4", className)} //maight come back to change the tailwind
            {...props}
        />
    );
}

function CardHeader({
    className,
    ...props }
    : React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn("flex flex-col space-y-1.5 mb-4", className)} //might come back to change the tailwind
            {...props}
        />
    );
}

function CardTitle({
    className,
    ...props }
    : React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="card-title"
            className={cn("leading-none", className)}
            {...props}
        />
    );
}

function CardDescription({
    className,
    ...props }
    : React.ComponentProps<"div">) {
    return (
        <p
            data-slot="card-description"
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    );
}

function CardContent({
    className,
    ...props }
    : React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6 [&:last-child]:pb-6", className)}
            {...props}
        />
    );
}

function CardActions({
    className,
    ...props }
    : React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-actions"
            className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
            {...props}
        />
    );
}

function CardFooter({
    className,
    ...props }
    : React.ComponentProps<"div">) {
        {
            return (
                <div
                    data-slot="card-footer"
                    className={cn("flex items-center p-6 pt-0 [.border-t]:pt-6", className)}
                    {...props}
                />
            );
        }
}

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardActions,
    CardFooter,
};