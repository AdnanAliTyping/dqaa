
import React from "react";

interface ArabicCalligraphyProps {
  size?: 'normal' | 'large';
}

const ArabicCalligraphy = ({ size = 'normal' }: ArabicCalligraphyProps) => {
  const textSize = size === 'large' ? 'text-6xl md:text-8xl' : 'text-4xl';

  return (
    <div className={`${textSize} mb-8 text-yellow-400 font-bold tracking-wider`}>
      عيد مبارك
    </div>
  );
};

export default ArabicCalligraphy;
