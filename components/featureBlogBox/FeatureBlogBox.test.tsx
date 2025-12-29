import {render, screen} from '@testing-library/react';
import FeatureBlogBox from './FeatureBlogBox';

describe('Feature Blog Box -- Happy Path', () => {
    beforeEach(() => {
        render(
            <FeatureBlogBox
                thumbnail='https://unitedco.com.au/wp-content/uploads/blog-pic-office-space.png'
                category='lifestyle'
                href='/'
                title='The title'
                excerpt='the excerpt'
                date='Dec 5, 2025'
                readTime='5 min read'
            />
        );
    });

    it('should render the background image and category', () => {
        const thumbnail = screen.getByTestId('thumbnail');

        expect(thumbnail).toHaveStyle({
            backgroundImage:
                'url(https://unitedco.com.au/wp-content/uploads/blog-pic-office-space.png)',
        });
    });

    it('should render the heading, paragraph along with date time', () => {
        const heading = screen.getByRole('heading', {
            level: 4,
            name: 'The title',
        });
        const excerpt = screen.getByText('the excerpt');
        const date = screen.getByRole('heading', {
            level: 5,
            name: '5 min read',
        });

        expect(heading).toBeInTheDocument();
        expect(excerpt).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });
});

describe('Feature Blog Box -- Unhappy Path', () => {
    it('should render fallback title if the title is undefined', () => {
        render(
            <FeatureBlogBox
                thumbnail='https://unitedco.com.au/wp-content/uploads/blog-pic-office-space.png'
                excerpt='the excerpt'
                date='Dec 5, 2025'
                readTime='4 min'
                href='/'
                category='lifestyle'
            />
        );

        const title = screen.getByRole('heading', {level: 4, name: 'Untitled'});

        expect(title).toBeInTheDocument();
    });

    it('should render the fallback thumbnail is thumbnail is missing', () => {
        render(
            <FeatureBlogBox
                title='The title'
                excerpt='the excerpt'
                date='Dec 5, 2025'
                readTime='4 min'
                href='/'
                category='lifestyle'
            />
        );

        const thumbnail = screen.getByTestId('thumbnail');

        expect(thumbnail).toHaveStyle({
            backgroundImage: '/fallback.jpg'
        })
    });
});
