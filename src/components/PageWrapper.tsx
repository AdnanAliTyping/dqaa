
import React, { Suspense, ReactNode } from "react";
import Layout from "./Layout";
import LoadingFallback from "./LoadingFallback";
import ErrorBoundary from "./ErrorBoundary";

interface PageWrapperProps {
  children: ReactNode;
  withLayout?: boolean;
}

import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  withLayout?: boolean;
};

const PageWrapper = ({ children, withLayout = true }: PageWrapperProps) => {
  // ...
};


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
