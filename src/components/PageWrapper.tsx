
import React, { Suspense, ReactNode } from "react";
import Layout from "./Layout";
import LoadingFallback from "./LoadingFallback";
import ErrorBoundary from "./ErrorBoundary";

interface PageWrapperProps {
  children: ReactNode;
  withLayout?: boolean;
}

const PageWrapper = ({ children, withLayout = true }: PageWrapperProps) => {
  if (!withLayout) {
    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
};

export default PageWrapper;
