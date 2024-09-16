enum GridFilterTypeEnum {
    Match = 'Match',
    Range = 'Range',
    SetValues = 'SetValues',
  }
  
  type GridFilterValue<T> = { 
    type: GridFilterTypeEnum.Match;
    filter: Extract<T, string | number>;
  };
  
  type GridFilterRange<T> = {
    type: GridFilterTypeEnum.Range;
    filter: Extract<T, number>;
    filterTo: Extract<T, number>;
  };
  
  type GridFilterSetValues<T> = {
    type: GridFilterTypeEnum.SetValues;
    values: T[];
  };