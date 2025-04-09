import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 1} onClick={onPreviousPage}>
        Previous
      </PageButton>

      <span>
        Page {currentPage} of {totalPages || 1}
      </span>

      <PageButton
        disabled={currentPage === totalPages || totalPages === 0}
        onClick={onNextPage}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};
