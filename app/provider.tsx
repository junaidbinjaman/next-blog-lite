'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {ReactNode, useEffect, useState} from 'react';

function Provider({children}: {children: ReactNode}) {
    const [queryClient] = useState(() => new QueryClient());

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            import('../mocks/browser').then(({worker}) => {
                worker.start();
            });
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default Provider;
