import {render, screen} from '@testing-library/react';
import ReviewBox from './ReviewBox';

describe('Search Box', () => {
    beforeEach(() => {
        render(
            <ReviewBox
                star={4}
                description='The description'
                name='Junaid'
                designation='CEO and founder'
            />
        );
    });

    it('should render the starts on the screen along with description name and designation', () => {
        const ratingStarts = screen.getAllByTestId('rating-star');
        const description = screen.getByText('The description');
        const name = screen.getByRole('heading', {level: 5, name: 'Junaid'});
        const designation = screen.getByText('CEO and founder');

        expect(ratingStarts).toHaveLength(4);
        expect(description).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(designation).toBeInTheDocument();
    });
});
