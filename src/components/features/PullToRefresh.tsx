
import { useState, useEffect, ReactNode } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: ReactNode;
  threshold?: number;
}

const PullToRefresh = ({ onRefresh, children, threshold = 100 }: PullToRefreshProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    let touchStartY = 0;
    let currentY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        touchStartY = e.touches[0].clientY;
        setStartY(touchStartY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY === 0 && touchStartY > 0) {
        currentY = e.touches[0].clientY;
        const distance = Math.max(0, currentY - touchStartY);
        setPullDistance(distance);
        
        if (distance > 50) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = async () => {
      if (pullDistance > threshold && !isRefreshing) {
        setIsRefreshing(true);
        try {
          await onRefresh();
        } finally {
          setIsRefreshing(false);
        }
      }
      setPullDistance(0);
      setStartY(0);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onRefresh, threshold, pullDistance, isRefreshing]);

  const refreshProgress = Math.min(pullDistance / threshold, 1);
  const shouldShowRefresh = pullDistance > 0;

  return (
    <div className="relative">
      {shouldShowRefresh && (
        <div 
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center bg-dqaa-500 text-white transition-all duration-200"
          style={{ 
            height: `${Math.min(pullDistance, 80)}px`,
            opacity: refreshProgress 
          }}
        >
          <RefreshCw 
            className={`h-6 w-6 ${isRefreshing ? 'animate-spin' : ''}`}
            style={{ transform: `rotate(${refreshProgress * 360}deg)` }}
          />
          <span className="ml-2 text-sm">
            {isRefreshing ? 'Refreshing...' : pullDistance > threshold ? 'Release to refresh' : 'Pull to refresh'}
          </span>
        </div>
      )}
      <div style={{ transform: `translateY(${Math.min(pullDistance / 2, 40)}px)` }}>
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;
