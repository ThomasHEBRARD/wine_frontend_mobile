import React, { Suspense } from 'react';
import { StatusBar } from 'react-native';
import Index from './src/app';

export default function App() {
    return (
        <React.StrictMode>
            <Suspense fallback={<>Loading</>}>
                <StatusBar barStyle="dark-content" />
                <Index />
            </Suspense>
        </React.StrictMode>
    );
}
