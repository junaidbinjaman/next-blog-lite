'use client';
import {TypographyH1} from '@/components/ui/h1';
import {useParams} from 'next/navigation';
import React from 'react';

function Page() {
    const params = useParams();

    console.log(params);
    return (
        <div>
            <TypographyH1>{params.slug}</TypographyH1>
        </div>
    );
}

export default Page;
