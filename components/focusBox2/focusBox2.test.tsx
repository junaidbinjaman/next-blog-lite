import {render, screen} from '@testing-library/react';
import FocusBox2 from './focusBox2';
import {FaFacebook} from 'react-icons/fa';

describe('Focus Box 2', () => {
    beforeEach(() => {
        render(
            <FocusBox2
                icon={<FaFacebook data-testid='bf-icon' />}
                label='Facebook'
                caption='the largest social media'
            />
        );
    });

        it('should render the icon on the page', () => {
            const fbIcon = screen.getByTestId('bf-icon');
    
            expect(fbIcon).toBeInTheDocument();
        });
    
        it('should render the title on the page', () => {
            const title = screen.getByText(/social media/i);
    
            expect(title).toBeInTheDocument();
        });
    
        it('should render the caption on the page', () => {
            const paragraph = screen.getByText(/social media/i);
    
            expect(paragraph).toBeInTheDocument();
        });
});
