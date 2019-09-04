import React from 'react';
import Header from './Header';
import StyledFilters from './Filters.styled';
import FilterItem from './FilterItem';
import { ReactComponent as FilterIcon } from '../../../assets/icons/filter.svg';
import { FiltersData } from './Filters.constants';

interface IFiltersProps {
  data: {
    [name: string]: string;
  };
  onChange(value: string, key: string): void;
}

export default function FilterComponent({ data, onChange }: IFiltersProps) {
  return (
    <StyledFilters>
      <Header>
        <FilterIcon />
        <p className="filter-header">Filters</p>
      </Header>
      {FiltersData.map(({ name, label, defaultValue, values }) => (
        <FilterItem
          key={name}
          name={name}
          onChange={onChange}
          value={data[name] || defaultValue}
          label={label}
          values={values}
        />
      ))}
    </StyledFilters>
  );
}
