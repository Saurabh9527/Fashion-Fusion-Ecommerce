
import React from 'react'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert" className="p-4 bg-red-100 text-red-700">
            <p className="font-bold">Something went wrong:</p>
            <pre className="mt-2">{error.message}</pre>
            <button
                onClick={resetErrorBoundary}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
                Try again
            </button>
        </div>
    )
}

export default ErrorFallback