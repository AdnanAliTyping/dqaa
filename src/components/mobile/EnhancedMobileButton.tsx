
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface EnhancedMobileButtonProps extends ButtonProps {
  touchOptimized?: boolean;
  hapticFeedback?: boolean;
}

const EnhancedMobileButton = forwardRef<HTMLButtonElement, EnhancedMobileButtonProps>(
  ({ className, touchOptimized = true, hapticFeedback = false, onClick, children, ...props }, ref) => {
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Add haptic feedback for mobile devices
      if (hapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
      
      onClick?.(e);
    };

    return (
      <Button
        ref={ref}
        className={cn(
          // Apple guideline: minimum 44px touch target
          touchOptimized && "min-h-[44px] min-w-[44px] touch-manipulation",
          // Enhanced mobile interactions
          "active:scale-95 transition-all duration-150 ease-out",
          // Better spacing for mobile
          "px-6 py-3 text-base font-medium",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

EnhancedMobileButton.displayName = "EnhancedMobileButton";

export default EnhancedMobileButton;
