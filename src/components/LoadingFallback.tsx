
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingFallbackProps {
  type?: 'page' | 'card' | 'list';
  count?: number;
}

const LoadingFallback = ({ type = 'page', count = 1 }: LoadingFallbackProps) => {
  if (type === 'page') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header skeleton */}
        <div className="h-16 bg-gray-50 border-b"></div>
        
        {/* Hero section skeleton */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
            <Skeleton className="h-10 w-32 mx-auto" />
          </div>
        </div>
        
        {/* Content skeleton */}
        <div className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <Skeleton className="h-40 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <Skeleton className="h-40 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
};

export default LoadingFallback;
