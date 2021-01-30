import React, { Suspense } from 'react';
import Index from './src/app';

export default function App() {
    return (
        <React.StrictMode>
            <Suspense fallback={<>Loading</>}>
                <Index />
            </Suspense>
        </React.StrictMode>
    );
}