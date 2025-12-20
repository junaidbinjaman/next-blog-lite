import {TypographyH5} from '@/components/ui/h5';
import {TypographyP} from '@/components/ui/paragraph';
import {ReactNode} from 'react';

type ServiceBoxProps = {
    icon: ReactNode;
    title: string;
    children: ReactNode
};

function ServiceBox({icon, title, children}: ServiceBoxProps) {
    return (
        <div className='w-57.5 bg-white p-6 rounded-md shadow-sm space-y-3.75'>
            <div className='space-y-3.75'>
                <div className='p-3.75 w-fit bg-[#F3F4F6] rounded'>{icon}</div>
                <TypographyH5>{title}</TypographyH5>
            </div>
            <TypographyP className='text-text-color'>{children}</TypographyP>
        </div>
    );
}

export default ServiceBox;
