const movieFilterManager = new MovieFilterManager();

// seach film by title
movieFilterManager.applySearchValue('Interstellar');

// filter by release year
movieFilterManager.applyFiltersValue({
  releaseYear: { type: GridFilterTypeEnum.Range, filter: 2023, filterTo: 2024 },
  rating: { type: GridFilterTypeEnum.Range, filter: 7, filterTo: 9 },
});