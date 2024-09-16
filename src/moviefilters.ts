interface MovieFilters {
    title?: GridFilterValue<string>;
    releaseYear?: GridFilterRange<number>;
    rating?: GridFilterRange<number>;
    awards?: GridFilterSetValues<string>;
  }