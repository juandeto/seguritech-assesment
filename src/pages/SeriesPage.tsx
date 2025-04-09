import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { fetchContent } from '../store/contentSlice';
import { AppDispatch, RootState } from '../store';
import { Pagination } from '../components/common/Pagination';
import {
  FiltersContainer,
  YearFilter,
  ItemsPerPageSelect,
} from '../components/common/Filters';
import SubHeader from '../components/common/SubHeader';
import ContentList from '../components/common/ContentList';
import LoadingState from '../components/common/LoadingState';
import ErrorState from '../components/common/ErrorState';

const SeriesContainer = styled.div``;

const SeriesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.content,
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get('page');
  const pageSizeParam = searchParams.get('pageSize');

  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const itemsPerPage = pageSizeParam ? parseInt(pageSizeParam, 10) : 20;

  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchContent());
    }
  }, [dispatch, items]);

  const filteredItems = useMemo(() => {
    let filtered = items
      .filter(
        (item) => item.programType === 'series' && item.releaseYear >= 2010,
      )
      .slice(0, 20)
      .sort((a, b) => a.title.localeCompare(b.title));

    if (yearFilter) {
      filtered = filtered.filter(
        (item) => item.releaseYear === Number(yearFilter),
      );
    }

    return filtered;
  }, [items, yearFilter]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleYearFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYearFilter(e.target.value);

    // Update URL when filter changes
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', '1');

    setSearchParams(newParams);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newPageSize = Number(e.target.value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', '1');
    newParams.set('pageSize', newPageSize.toString());
    setSearchParams(newParams);
  };

  const handlePreviousPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', newPage.toString());
    newParams.set('pageSize', itemsPerPage.toString());

    setSearchParams(newParams);
  };

  const handleNextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', newPage.toString());
    newParams.set('pageSize', itemsPerPage.toString());
    setSearchParams(newParams);
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <SeriesContainer>
      <SubHeader title="Popular Series" />

      <FiltersContainer>
        <YearFilter value={yearFilter} onChange={handleYearFilterChange} />
        <ItemsPerPageSelect
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
      </FiltersContainer>

      <ContentList items={paginatedItems} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </SeriesContainer>
  );
};

export default SeriesPage;
