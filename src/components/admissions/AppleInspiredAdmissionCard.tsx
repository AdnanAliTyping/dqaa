
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AppleInspiredAdmissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  buttonText: string;
  iconColor: string;
  borderColor: string;
  isInteractive?: boolean;
  onClick?: () => void;
}

const AppleInspiredAdmissionCard = ({
  icon: Icon,
  title,
  description,
  content,
  buttonText,
  iconColor,
  borderColor,
  isInteractive = false,
  onClick
}: AppleInspiredAdmissionCardProps) => {
  return (
    <Card className={`
      glass-hover apple-card-hover
      bg-white/80 backdrop-blur-apple border border-white/20
      shadow-apple hover:shadow-apple-lg
      transition-all duration-300 ease-apple
      ${isInteractive ? 'cursor-pointer' : ''}
      ${borderColor}
    `}>
      <CardHeader className="flex flex-row items-start space-x-4 pb-4">
        <div className={`
          bg-gradient-to-br from-white/20 to-white/10 
          backdrop-blur-apple border border-white/30
          p-3 rounded-apple shadow-apple
          transition-transform duration-200 ease-apple
          hover:scale-110
        `}>
          <Icon size={24} className={iconColor} />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-display font-semibold text-gray-900 mb-1">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 font-medium">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {content}
        </p>
        {onClick && (
          <Button 
            onClick={onClick}
            className="
              apple-button-primary w-full
              bg-gradient-to-r from-dqaa-500 to-dqaa-600
              hover:from-dqaa-600 hover:to-dqaa-700
              text-white font-medium
              border-none shadow-apple
              transition-all duration-200 ease-apple
              active:scale-[0.98]
            "
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AppleInspiredAdmissionCard;
