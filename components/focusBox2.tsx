import React, { ReactNode } from 'react';
import {Caption} from './ui/caption';
import {TypographyP} from './ui/paragraph';

type FocusBox2Props = {
    label: string;
    caption: string;
    icon: ReactNode
}

function FocusBox2({label, caption, icon}: FocusBox2Props) {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex space-x-2'>
                {icon}
                <Caption className='text-base text-stone-800'>
                    {label}
                </Caption>
            </div>
            <TypographyP className='font-medium'>
                {caption}
            </TypographyP>
        </div>
    );
}

export default FocusBox2;
