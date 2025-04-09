import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingState from '../LoadingState';

describe('LoadingState', () => {
  it('renders loading spinner and text correctly', () => {
    render(<LoadingState />);

    expect(screen.getByText('Loading content...')).toBeInTheDocument();
  });
});
