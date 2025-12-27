import { render, screen } from '@testing-library/react';
import CategoryBox from './CategoryBox';

describe('CategoryBox', () => {
  beforeEach(() => {
    render(
      <CategoryBox
        title="Technology"
        articlesText="95 Articles"
      />
    );
  });

  it('should render title on the screen', () => {
    const title = screen.getByRole('heading', { level: 5 });
    expect(title).toBeInTheDocument();
  });

  it('should render article numbers correctly', () => {
    expect(screen.getByText(/95 Articles/i)).toBeInTheDocument();
  });

  it('should not render if title is missing', () => {
    render(
      <CategoryBox
        title=""
        articlesText="95 Articles"
      />
    );

    expect(screen.queryByTestId('categoryBox')).not.toBeInTheDocument();
  });
});
