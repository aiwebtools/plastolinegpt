import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cyber: "bg-neon-cyan text-background hover:bg-neon-cyan/80 shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.8)] font-orbitron font-bold uppercase tracking-wider before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        neon: "border-2 border-neon-pink bg-transparent text-neon-pink hover:bg-neon-pink hover:text-background shadow-[0_0_15px_hsl(var(--neon-pink)/0.5)] hover:shadow-[0_0_25px_hsl(var(--neon-pink)/0.8)] transition-all duration-300 font-exo font-semibold animate-pulse-glow",
        matrix: "bg-gradient-to-r from-neon-green to-neon-cyan text-background hover:from-neon-cyan hover:to-neon-purple shadow-[0_0_20px_hsl(var(--neon-green)/0.5)] hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.8)] font-space font-bold before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        glow: "bg-neon-purple text-background hover:bg-neon-purple/80 shadow-[0_0_20px_hsl(var(--neon-purple)/0.6)] hover:shadow-[0_0_35px_hsl(var(--neon-purple)/0.9)] animate-mega-glow font-orbitron font-semibold",
        youtube: "bg-neon-red text-background hover:bg-neon-red/80 shadow-[0_0_20px_hsl(var(--neon-red)/0.6)] hover:shadow-[0_0_35px_hsl(var(--neon-red)/0.9)] font-exo font-bold before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-600",
        hologram: "border border-neon-cyan bg-neon-cyan/10 text-neon-cyan backdrop-blur-sm hover:bg-neon-cyan/20 hover:border-neon-pink hover:text-neon-pink shadow-[inset_0_0_20px_hsl(var(--neon-cyan)/0.2)] hover:shadow-[inset_0_0_30px_hsl(var(--neon-pink)/0.3)] font-space font-medium animate-twinkle",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        xxl: "h-16 rounded-xl px-16 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
