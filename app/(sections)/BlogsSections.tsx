import {TypographyH2} from '@/components/ui/h2';
import {TypographyH4} from '@/components/ui/h4';
import { TypographyH5 } from '@/components/ui/h5';
import {TypographyP} from '@/components/ui/paragraph';
import { LuCalendar } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";

function BlogsSections() {
    return (
        <section className='max-w-282.5 mx-auto mb-15'>
            <TypographyH2 className='text-primary'>
                Latest Articles
            </TypographyH2>
            <div>
                <div className='flex space-x-10'>
                    <div className='flex-1 bg-[url(https://unitedco.com.au/wp-content/uploads/blog-pic-office-space.png)] bg-cover bg-center w-125 h-63.75 rounded-md p-3'>
                        <TypographyP className='bg-white py-1 px-2.5 rounded-md w-fit'>Lifestyle</TypographyP>
                    </div>
                    <div className='flex-1'>
                        <div>
                            <TypographyH5 className='text-primary'>
                                The Art of Minimalist Workspaces
                            </TypographyH5>
                            <TypographyP className='text-text-color'>
                                Discover how a clean and organized workspace can
                                boost your productivity and creativity. Learn
                                the essential principles of minimalist design.
                            </TypographyP>
                        </div>
                        <div>
                            <div>
                                <LuCalendar /> <TypographyH5>Dec 5, 2025</TypographyH5>
                            </div>
                            <div>
                                <FaRegClock /> <TypographyH5>4 min read</TypographyH5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogsSections;
