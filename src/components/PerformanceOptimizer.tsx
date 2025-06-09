
import React, { ReactNode } from "react";

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer = ({ children }: PerformanceOptimizerProps) => {
  return <>{children}</>;
};

export default PerformanceOptimizer;
