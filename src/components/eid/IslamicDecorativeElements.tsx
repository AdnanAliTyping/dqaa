
import React from "react";
import { Star } from "lucide-react";

interface IslamicDecorativeElementsProps {
  size?: 'small' | 'large';
}

const IslamicDecorativeElements = ({ size = 'small' }: IslamicDecorativeElementsProps) => {
  const starSize = size === 'large' ? 'w-8 h-8' : 'w-6 h-6';
  const moonSize = size === 'large' ? 'text-6xl' : 'text-3xl';
  const spacing = size === 'large' ? 'space-x-4' : 'space-x-2';

  return (
    <div className="flex justify-center items-center">
      <div className={`flex items-center ${spacing}`}>
        <Star className={`${starSize} text-yellow-400 animate-pulse`} />
        <div className={moonSize}>🌙</div>
        <Star className={`${starSize} text-yellow-400 animate-pulse`} />
      </div>
    </div>
  );
};

export default IslamicDecorativeElements;
