interface FilterState<T> {
    filters: T;
  }
  
  interface MovieFilterState extends FilterState<MovieFilters> {
    applySearchValue(search: string): void;
    applyFiltersValue(filters: MovieFilters): void;
  }