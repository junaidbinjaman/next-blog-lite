'use client';
import {useState} from 'react';
import {PlusIcon} from '@/components/icons/lucide-plus';
import {MinusIcon} from '@/components/icons/lucide-minus';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyH5} from '@/components/ui/h5';
import {TypographyP} from '@/components/ui/paragraph';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@radix-ui/react-accordion';
import style from './FaqSection.module.css';

function FaqSection() {
    const [openItem, setOpenItem] = useState<string>('item-0');
    const faqData = [
        {
            question: 'How often is new content published?',
            answer: 'We publish new articles weekly, with a mix of in-depth guides, quick tips, and industry insights to keep our readers informed and engaged.',
        },
        {
            question: 'How can I subscribe to updates?',
            answer: "Subscribe via our newsletter form at the bottom of the page. You'll receive email notifications for new posts, exclusive content, and special offers.",
        },
        {
            question: 'Can I contribute as a writer?',
            answer: 'Absolutely! We welcome guest writers. Submit your pitch through our contact form, and our editorial team will review it for potential publication.',
        },
        {
            question: 'Is the content free?',
            answer: 'Yes, all articles are free to read. We also offer premium content and resources for subscribers who want deeper dives and exclusive access.',
        },
        {
            question: 'How do I contact support?',
            answer: 'Reach out via our contact page or email support@liteblog.com. We respond to inquiries within 24 hours during business days.',
        },
        {
            question: 'What topics do you cover?',
            answer: 'We cover a wide range of topics including technology, lifestyle, business, and personal development, tailored for modern readers.',
        },
        {
            question: 'Can I share articles on social media?',
            answer: 'Definitely! Sharing is encouraged. Use the social media buttons on each article to spread the word and help grow our community.',
        },
    ];
    return (
        <section className='mb-15 p-5'>
            <TypographyH2 className='text-center text-primary mt-20'>
                Frequently Asked Questions
            </TypographyH2>
            <TypographyP className='text-center'>
                Find answers to common questions about LiteBlog.
            </TypographyP>
            <Accordion
                type='single'
                collapsible
                className='max-w-180 mx-auto mt-10'
                value={openItem}
                onValueChange={setOpenItem}
            >
                {faqData.map(
                    (el: {question: string; answer: string}, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className='mb-4.5 AccordionItem'
                        >
                            <AccordionTrigger className='flex justify-between px-4 py-3 w-full shadow-sm rounded-md cursor-pointer'>
                                <TypographyH5>{el.question}</TypographyH5>
                                {openItem === `item-${index}` ? (
                                    <MinusIcon />
                                ) : (
                                    <PlusIcon />
                                )}
                            </AccordionTrigger>
                            <AccordionContent
                                className={style.AccordionContent}
                            >
                                <div className='px-4 py-3 flex flex-col gap-4 text-balance'>
                                    <p>{el.answer}</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </section>
    );
}

export default FaqSection;
