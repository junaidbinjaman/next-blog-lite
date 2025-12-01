import {render, screen} from '@testing-library/react';
import FocusBox from './FocusBox';
import {FaFacebookF} from 'react-icons/fa';

describe('Focus Box', () => {
    beforeEach(() => {
        render(
            <FocusBox
                icon={<FaFacebookF data-testid='icon' />}
                title='Facebook'
                caption='The largest social media'
            />
        );
    });

    it('should render the icon on the page', () => {
        const fbIcon = screen.getByTestId('icon');

        expect(fbIcon).toBeInTheDocument();
    });

    it('should render the title on the page', () => {
        const title = screen.getByRole('heading', {level: 6})

        expect(title).toBeInTheDocument();
    });

    it('should render the caption on the page', () => {
        const paragraph = screen.getByText(/social media/i);

        expect(paragraph).toBeInTheDocument();
    });
});
