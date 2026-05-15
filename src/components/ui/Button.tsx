import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
    
    const variants = {
      primary: "bg-[#E53935] text-white hover:bg-[#D32F2F] shadow-md shadow-[#E53935]/20 hover:shadow-[#E53935]/40",
      secondary: "bg-[#121212] text-white hover:bg-[#1A1A1A] shadow-md",
      outline: "border-2 border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white",
      ghost: "text-[#121212] hover:bg-[#F2F2F2]"
    };
    
    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";
