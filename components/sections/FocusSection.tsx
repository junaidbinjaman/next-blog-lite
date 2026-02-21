import FocusBox from '@/components/focusBox/FocusBox';
import {CiGlobe} from 'react-icons/ci';
import {FaRegNewspaper} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {MdShowChart} from 'react-icons/md';

function FocusSection() {
    return (
        <section className='bg-black-color p-8 mb-15'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center max-w-282.5 mx-auto'>
                <div className='space-y-2'>
                    <FocusBox
                        icon={
                            <FiUsers
                                className='text-natural-background'
                                size={31}
                            />
                        }
                        title='15,000+'
                        caption='Active Readers'
                    />
                </div>
                <div className='space-y-2'>
                    <FocusBox
                        icon={
                            <FaRegNewspaper
                                className='text-natural-background'
                                size={31}
                            />
                        }
                        title='850+'
                        caption='Published Articles'
                    />
                </div>
                <div className='space-y-2'>
                    <FocusBox
                        icon={
                            <MdShowChart
                                className='text-natural-background'
                                size={31}
                            />
                        }
                        title='2.5M+'
                        caption='Monthly Views'
                    />
                </div>
                <div className='space-y-2'>
                    <FocusBox
                        icon={
                            <CiGlobe
                                className='text-natural-background'
                                size={31}
                            />
                        }
                        title='120+'
                        caption='Countries Reached'
                    />
                </div>
            </div>
        </section>
    );
}

export default FocusSection;
