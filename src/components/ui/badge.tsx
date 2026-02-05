import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils.ts';

const badgeVariants = cva(
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
        variants: {
            variant: {
                default: 'borde-transparent bg-primary text-primary-foreground [a&]: hover:bg-primary/90',
                secondary: 'bg-secondary text-secondary-foreground [a&]: hover:bg-secondary/90',
                destructive:
                    'bg-destructive text-destructive-foreground [a&]: hover:bg-destructive/90', // might change later
                outline: 'border border-input bg-background text-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

function BadgeInner({
    className,
    variant,
    asChild = false,
    ...props }
    : React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : 'span';
    return (
        <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}
const Badge = BadgeInner;

export { Badge, badgeVariants };