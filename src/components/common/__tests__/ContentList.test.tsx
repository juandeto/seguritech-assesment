import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContentList from '../ContentList';
import { ContentItem } from '../../../types';

vi.mock('../Modal', () => ({
  default: ({ item, onClose }: { item: ContentItem; onClose: () => void }) => (
    <div data-testid="modal">
      <div>Modal Content: {item.title}</div>
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

const mockItems: ContentItem[] = [
  {
    title: 'Test Movie 1',
    description: 'Test Description 1',
    programType: 'movie',
    releaseYear: 2020,
    images: {
      'Poster Art': {
        url: 'https://example.com/poster1.jpg',
        width: 100,
        height: 100,
      },
    },
  },
  {
    title: 'Test Movie 2',
    description: 'Test Description 2',
    programType: 'movie',
    releaseYear: 2021,
    images: {
      'Poster Art': {
        url: 'https://example.com/poster2.jpg',
        width: 100,
        height: 100,
      },
    },
  },
];

describe('ContentList', () => {
  it('renders a list of content items', () => {
    render(<ContentList items={mockItems} />);

    expect(screen.getByText('Test Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Test Movie 2')).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'https://example.com/poster1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'Test Movie 1');
    expect(images[1]).toHaveAttribute('src', 'https://example.com/poster2.jpg');
    expect(images[1]).toHaveAttribute('alt', 'Test Movie 2');
  });

  it('shows modal when an item is clicked', async () => {
    render(<ContentList items={mockItems} />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    const firstCard = screen.getByText('Test Movie 1').closest('div');
    await userEvent.click(firstCard!);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content: Test Movie 1')).toBeInTheDocument();
  });

  it('closes modal when close button is clicked', async () => {
    render(<ContentList items={mockItems} />);

    const firstCard = screen.getByText('Test Movie 1').closest('div');
    await userEvent.click(firstCard!);

    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const closeButton = screen.getByText('Close');
    await userEvent.click(closeButton);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('renders empty list when no items are provided', async () => {
    render(<ContentList items={[]} />);

    const firstCard = await screen.queryByText('Test Movie 1');
    expect(firstCard).toBeNull();
  });
});
