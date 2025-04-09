import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorState from '../ErrorState';

describe('ErrorState', () => {
  it('renders error message correctly', () => {
    render(<ErrorState message="Test error message" />);

    expect(
      screen.getByText('Oops, something went wrong...'),
    ).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('has a reload button', () => {
    render(<ErrorState message="Test error message" />);

    const reloadButton = screen.getByText('Reload');
    expect(reloadButton).toBeInTheDocument();
  });

  it('calls window.location.reload when reload button is clicked', async () => {
    const reloadMock = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    render(<ErrorState message="Test error message" />);

    const reloadButton = screen.getByText('Reload');
    await userEvent.click(reloadButton);

    expect(reloadMock).toHaveBeenCalledTimes(1);
  });
});
