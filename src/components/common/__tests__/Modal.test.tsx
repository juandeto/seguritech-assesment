import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../Modal';
import { ContentItem } from '../../../types';

const mockItem: ContentItem = {
  title: 'Test Movie',
  description: 'This is a test description for the movie',
  programType: 'movie',
  releaseYear: 2022,
  images: {
    'Poster Art': {
      url: 'https://example.com/poster.jpg',
      width: 100,
      height: 150,
    },
  },
};

describe('Modal', () => {
  const onCloseMock = vi.fn();

  beforeEach(() => {
    onCloseMock.mockReset();
    vi.clearAllMocks();
  });

  it('renders modal with correct content', () => {
    render(<Modal item={mockItem} onClose={onCloseMock} />);

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test description for the movie'),
    ).toBeInTheDocument();

    const image = screen.getByAltText('Test Movie');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/poster.jpg');
  });

  it('calls onClose when close button is clicked', async () => {
    render(<Modal item={mockItem} onClose={onCloseMock} />);

    const closeButton = screen.getByRole('button');
    await userEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking outside the modal', () => {
    render(<Modal item={mockItem} onClose={onCloseMock} />);

    const overlay = screen.getByText('Test Movie').parentElement?.parentElement;
    fireEvent.mouseDown(overlay as Element);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking inside the modal', () => {
    render(<Modal item={mockItem} onClose={onCloseMock} />);

    const modalContent = screen.getByText('Test Movie').parentElement;
    fireEvent.mouseDown(modalContent as Element);

    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
