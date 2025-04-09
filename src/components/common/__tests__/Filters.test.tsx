import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { YearFilter, ItemsPerPageSelect, FiltersContainer } from '../Filters';

describe('Filters Components', () => {
  describe('YearFilter', () => {
    const mockOnChange = vi.fn();

    beforeEach(() => {
      mockOnChange.mockReset();
    });

    it('renders with correct options', () => {
      render(<YearFilter value="" onChange={mockOnChange} />);

      expect(screen.getByText('All Years')).toBeInTheDocument();

      const currentYear = new Date().getFullYear();
      expect(screen.getByText('2010')).toBeInTheDocument();
      expect(screen.getByText(currentYear.toString())).toBeInTheDocument();
    });

    it('selects the correct value', () => {
      render(<YearFilter value="2015" onChange={mockOnChange} />);

      const selectElement = screen.getByRole('combobox');
      expect(selectElement).toHaveValue('2015');
    });

    it('calls onChange when a new year is selected', async () => {
      render(<YearFilter value="" onChange={mockOnChange} />);

      const selectElement = screen.getByRole('combobox');
      await userEvent.selectOptions(selectElement, '2020');

      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('ItemsPerPageSelect', () => {
    const mockOnChange = vi.fn();

    beforeEach(() => {
      mockOnChange.mockReset();
    });

    it('renders with correct options', () => {
      render(<ItemsPerPageSelect value={20} onChange={mockOnChange} />);

      expect(screen.getByText('5 per page')).toBeInTheDocument();
      expect(screen.getByText('10 per page')).toBeInTheDocument();
      expect(screen.getByText('20 per page')).toBeInTheDocument();
    });

    it('selects the correct value', () => {
      render(<ItemsPerPageSelect value={10} onChange={mockOnChange} />);

      const selectElement = screen.getByRole('combobox');
      expect(selectElement).toHaveValue('10');
    });

    it('calls onChange when a new option is selected', async () => {
      render(<ItemsPerPageSelect value={20} onChange={mockOnChange} />);

      const selectElement = screen.getByRole('combobox');
      await userEvent.selectOptions(selectElement, '5');

      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('FiltersContainer', () => {
    it('renders with correct styling', () => {
      render(
        <FiltersContainer>
          <div>Filter 1</div>
          <div>Filter 2</div>
        </FiltersContainer>,
      );

      const container = screen.getByText('Filter 1').parentElement;
      expect(container).toHaveStyle({
        display: 'flex',
        'justify-content': 'space-between',
      });

      expect(screen.getByText('Filter 1')).toBeInTheDocument();
      expect(screen.getByText('Filter 2')).toBeInTheDocument();
    });
  });
});
