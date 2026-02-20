'use client';
import {useWriter} from '@/hooks/useWriter';
import {TypographyH2} from '../../components/ui/h2';
import {TypographyP} from '../../components/ui/paragraph';
import WriterBox, {WriterBoxProps} from '../../components/writerBox/WriterBox';
import WriterSkeleton from '@/components/skeletons/WriterSkeleton';

function WriterSection() {
    const {isLoading, isError, error, data} = useWriter(4);

    if (!isLoading) {
        console.log(data);
    }

    return (
        <section className='max-w-282.5 mx-auto mb-12.5 px-5'>
            <TypographyH2 className='text-center text-primary'>
                Meet Our Writers
            </TypographyH2>
            <TypographyP className='text-center'>
                Get to know the talented individuals behind our content.
            </TypographyP>

            <div className='mt-10'>
                {isLoading ? (
                    <WriterSkeleton repeat={4} />
                ) : isError ? (
                    <TypographyP className='text-red-500'>
                        Failed to load writers {error.message}
                    </TypographyP>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5'>
                        {data &&
                            data.data.map(
                                (el: WriterBoxProps, index: number) => (
                                    <WriterBox
                                        key={index}
                                        avatar={el.avatar}
                                        name={el.name}
                                        designation={el.designation}
                                        bio={el.bio}
                                        facebook={el.facebook}
                                        linkedin={el.linkedin}
                                        instagram={el.instagram}
                                    />
                                )
                            )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default WriterSection;
