// src/pages/app.test.tsx

import { render, screen } from '@testing-library/react';

import { HomePage } from '.';

describe('App', () => {
  it('renders the heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('react-dev-17');
  });
});
