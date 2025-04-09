import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('renders pagination with correct page information', () => {
    render(
      <Pagination 
        currentPage={2} 
        totalPages={5} 
        onPreviousPage={() => {}} 
        onNextPage={() => {}} 
      />
    );
    
    expect(screen.getByText('Page 2 of 5')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('disables Previous button on first page', () => {
    render(
      <Pagination 
        currentPage={1} 
        totalPages={5} 
        onPreviousPage={() => {}} 
        onNextPage={() => {}} 
      />
    );
    
    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeDisabled();
    
    const nextButton = screen.getByText('Next');
    expect(nextButton).not.toBeDisabled();
  });

  it('disables Next button on last page', () => {
    render(
      <Pagination 
        currentPage={5} 
        totalPages={5} 
        onPreviousPage={() => {}} 
        onNextPage={() => {}} 
      />
    );
    
    const previousButton = screen.getByText('Previous');
    expect(previousButton).not.toBeDisabled();
    
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPreviousPage when Previous button is clicked', async () => {
    const onPreviousPage = vi.fn();
    const onNextPage = vi.fn();
    
    render(
      <Pagination 
        currentPage={2} 
        totalPages={5} 
        onPreviousPage={onPreviousPage} 
        onNextPage={onNextPage} 
      />
    );
    
    const previousButton = screen.getByText('Previous');
    await userEvent.click(previousButton);
    
    expect(onPreviousPage).toHaveBeenCalledTimes(1);
    expect(onNextPage).not.toHaveBeenCalled();
  });

  it('calls onNextPage when Next button is clicked', async () => {
    const onPreviousPage = vi.fn();
    const onNextPage = vi.fn();
    
    render(
      <Pagination 
        currentPage={2} 
        totalPages={5} 
        onPreviousPage={onPreviousPage} 
        onNextPage={onNextPage} 
      />
    );
    
    const nextButton = screen.getByText('Next');
    await userEvent.click(nextButton);
    
    expect(onNextPage).toHaveBeenCalledTimes(1);
    expect(onPreviousPage).not.toHaveBeenCalled();
  });

  it('handles edge case of zero total pages', () => {
    render(
      <Pagination 
        currentPage={1} 
        totalPages={0} 
        onPreviousPage={() => {}} 
        onNextPage={() => {}} 
      />
    );
    
    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
    
    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeDisabled();
    
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });
});
