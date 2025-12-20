import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubscribeForm from './subscribeForm';

describe('Subscribe Form', () => {
    let user: ReturnType<typeof userEvent.setup>;

    beforeEach(() => {
        render(<SubscribeForm />);
        user = userEvent.setup();
    });

    it('should render the inout field', () => {
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it('should render the button successfully', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('should print the output when the button is clicked', async () => {
        const input = screen.getByRole('textbox');
        await user.type(input, 'junaid@allnextver.com');

        const button = screen.getByRole('button');
        await user.click(button);

        const successMessage = await screen.findByText(
            /You've subscribed successfully/i
        );
        expect(successMessage).toBeInTheDocument();
    });
});
