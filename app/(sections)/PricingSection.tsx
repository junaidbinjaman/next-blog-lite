import PricingBox from '@/components/pricingBox/PricingBox';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyP} from '@/components/ui/paragraph';

function PricingSection() {
    const freePricingFeatures = [
        'Access to most articles',
        'Weekly newsletter',
        'Comment on posts',
        'Mobile responsive',
        'Basic search',
    ];

    const popularPricingFeatures = [
        'Unlimited article access',
        'Ad-free experience',
        'Daily newsletter',
        'Exclusive content',
        'Early article access',
        'Download articles',
        'Priority support',
    ];

    const enterprisePricingFeatures = [
        'Unlimited article access',
        'Ad-free experience',
        'Daily newsletter',
        'Exclusive content',
        'Early article access',
        'Download articles',
        'Priority support',
    ];
    return (
        <section className='mb-12.5 max-w-250 mx-auto mt-20 p-5'>
            <TypographyH2 className='text-primary text-center'>
                Simple, Transparent Pricing
            </TypographyH2>
            <TypographyP className='text-center'>
                Choose the plan that works best for you. All plans include a
                14-day free trial.
            </TypographyP>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 mt-11'>
                <PricingBox
                    price={0}
                    title='Free'
                    type='default'
                    buttonTitle='Get Started'
                    period='forever'
                    shortDescription='Perfect for casual readers'
                    features={freePricingFeatures}
                />
                <PricingBox
                    price={9}
                    title='Premium'
                    type='popular'
                    buttonTitle='Start Free Trial'
                    period='month'
                    shortDescription='Best for dedicated readers'
                    features={popularPricingFeatures}
                />
                <PricingBox
                    price={49}
                    title='Enterprise'
                    type='default'
                    buttonTitle='Contact Sales'
                    period='month'
                    shortDescription='For teams and organizations'
                    features={enterprisePricingFeatures}
                />
            </div>
        </section>
    );
}

export default PricingSection;
