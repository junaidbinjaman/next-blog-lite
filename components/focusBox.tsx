import React, { ReactNode } from 'react';
import {TypographyH6} from './ui/h6';
import {TypographyP} from './ui/paragraph';
import clsx from 'clsx';

type FocusBoxProps = {
    title: string;
    caption: string;
    icon: ReactNode;
    colorCode?: string;
}

function FocusBox({title, caption, icon, colorCode = '#ffffff'}: FocusBoxProps) {
    return (
        <div>
            <div className='flex flex-col items-center space-y-2'>
                {icon}
                <TypographyH6 className={clsx(
                    'font-medium',
                    `text-white`
                )}>
                    {title}
                </TypographyH6>
            </div>
            <TypographyP className={clsx(
                'text-base',
                `text-white`
            )}>
                {caption}
            </TypographyP>
        </div>
    );
}

export default FocusBox;
