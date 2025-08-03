
import React, { Suspense, ReactNode } from "react";
import Layout from "./Layout";
import LoadingFallback from "./LoadingFallback";
import SafeErrorBoundary from "./SafeErrorBoundary";

interface PageWrapperProps {
  children: ReactNode;
  withLayout?: boolean;
}

const PageWrapper = ({ children, withLayout = true }: PageWrapperProps) => {
  if (!withLayout) {
    return (
      <SafeErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      </SafeErrorBoundary>
    );
  }

  return (
    <SafeErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      </Layout>
    </SafeErrorBoundary>
  );
};

export default PageWrapper;
