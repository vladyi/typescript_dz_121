class MovieFilterManager implements MovieFilterState {
    filters: MovieFilters = {};
  
    applySearchValue(search: string) {
      this.filters.title = { type: GridFilterTypeEnum.Match, filter: search };
    }
  
    applyFiltersValue(filters: MovieFilters) {
      this.filters = { ...this.filters, ...filters };
    }
}