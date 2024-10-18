"use client"
// components/ui/button.jsx
import * as React from "react"
import { cn } from "./utils"
import { Slot } from "@radix-ui/react-slot"
import { useRouter } from "next/navigation"
 
const buttonVariants = {
  default: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90",
  outline: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
  secondary: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
}

const buttonSizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
}

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants[variant], buttonSizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"
 
export { Button, buttonVariants }

export const ButtonForLanding = ()=>{ 
  const route = useRouter()
  const routeToEvent = ()=>{
    route.push("/events")
  }
  return <div>
    <button 
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-violet-400 bg-slate-900 border border-violet-600 rounded-md hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800 transition-colors"
            onClick={routeToEvent}
          >
            Load More Events Events..
          </button>
  </div>
}