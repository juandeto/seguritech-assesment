import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

vi.mock('../Header', () => ({
  default: () => <div data-testid="header">Header Component</div>,
}));

vi.mock('../Footer', () => ({
  default: () => <div data-testid="footer">Footer Component</div>,
}));

describe('Layout', () => {
  it('renders header, content, and footer', () => {
    render(
      <Layout>
        <div data-testid="content">Test Content</div>
      </Layout>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
