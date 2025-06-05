
import React from "react";
import { cn } from "@/lib/utils";

interface AppleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  glass?: boolean;
}

const AppleCard = React.forwardRef<HTMLDivElement, AppleCardProps>(
  ({ className, children, hoverable = true, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-apple-lg border border-white/10 bg-white/5 backdrop-blur-apple",
          "shadow-apple transition-all duration-300 ease-apple",
          glass && "bg-white/[0.02] border-white/[0.05]",
          hoverable && [
            "hover:shadow-apple-lg hover:scale-[1.02]",
            "hover:bg-white/[0.08] hover:border-white/20",
            "cursor-pointer"
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AppleCard.displayName = "AppleCard";

const AppleCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
));
AppleCardHeader.displayName = "AppleCardHeader";

const AppleCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-tight tracking-tight text-white",
      className
    )}
    {...props}
  />
));
AppleCardTitle.displayName = "AppleCardTitle";

const AppleCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-white/70 leading-relaxed", className)}
    {...props}
  />
));
AppleCardDescription.displayName = "AppleCardDescription";

const AppleCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
));
AppleCardContent.displayName = "AppleCardContent";

export { AppleCard, AppleCardHeader, AppleCardTitle, AppleCardDescription, AppleCardContent };
