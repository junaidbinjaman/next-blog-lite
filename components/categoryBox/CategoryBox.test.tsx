import { render, screen } from '@testing-library/react';
import CategoryBox from './CategoryBox';

describe('CategoryBox', () => {
  beforeEach(() => {
    render(
      <CategoryBox
        title="Technology"
        numOfArticles={98}
        href='/example'
      />
    );
  });

  it('should render title on the screen', () => {
    const title = screen.getByRole('heading', { level: 5 });
    expect(title).toBeInTheDocument();
  });

  it('should render article numbers correctly', () => {
    expect(screen.getByText(/98/i)).toBeInTheDocument();
  });

  it('should not render if title is missing', () => {
    render(
      <CategoryBox
        title=""
        numOfArticles={95}
        href='/'
      />
    );

    expect(screen.queryByTestId('categoryBox')).not.toBeInTheDocument();
  });
});
