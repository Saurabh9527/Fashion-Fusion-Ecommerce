
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './ErrorFallback';

const CustomErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Reset any state that caused the error here
    }}
  >
    {children}
  </ErrorBoundary>
  )
}

export default CustomErrorBoundary