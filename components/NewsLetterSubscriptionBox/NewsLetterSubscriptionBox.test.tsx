import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsLetterSubscriptionBox from './NewsLetterSubscriptionBox';

describe('NewsLetterSubscriptionBox', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    render(<NewsLetterSubscriptionBox />);
    user = userEvent.setup();
  });

  it('renders heading, description, input and button', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/subscribe to our newsletter/i);

    expect(
      screen.getByText(/get the latest articles and insights delivered directly to your inbox\./i)
    ).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /subscribe/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('allows typing into the email input and preserves value', async () => {
    const input = screen.getByPlaceholderText('Enter your email');
    const testEmail = 'test.user+edgecase@example.co.uk';

    await user.type(input, testEmail);
    expect((input as HTMLInputElement).value).toBe(testEmail);
  });

  it('accepts long input values without truncation', async () => {
    const input = screen.getByPlaceholderText('Enter your email');
    const longValue = 'a'.repeat(1024) + '@example.com';

    await user.type(input, longValue);
    expect((input as HTMLInputElement).value).toBe(longValue);
  });
});
