import styled from 'styled-components';
import { ChangeEvent } from 'react';

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

const SelectFilter = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2010; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

const yearOptions = generateYearOptions();

interface YearFilterProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const YearFilter = ({ value, onChange }: YearFilterProps) => {
  return (
    <SelectFilter value={value} onChange={onChange}>
      <option value="">All Years</option>
      {yearOptions.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </SelectFilter>
  );
};

interface ItemsPerPageSelectProps {
  value: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const ItemsPerPageSelect = ({
  value,
  onChange,
}: ItemsPerPageSelectProps) => {
  return (
    <SelectFilter value={value} onChange={onChange}>
      <option value={5}>5 per page</option>
      <option value={10}>10 per page</option>
      <option value={20}>20 per page</option>
    </SelectFilter>
  );
};
