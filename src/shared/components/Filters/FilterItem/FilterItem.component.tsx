import React, { useCallback, useState } from 'react';
import Select from '../../Select';
import StyledFilterItem from './FilterItem.styled';

interface IFilterItemProps {
  name: string;
  label: string;
  value: string;
  values: string[];
  onChange(name: string, value: string): void;
}

export default function FilterItem({
  name,
  label,
  value,
  values,
  onChange
}: IFilterItemProps) {
  const handleChange = useCallback(newValue => {
    onChange(name, newValue);
  }, []);

  return (
    <div>
      <StyledFilterItem>
        <div className="filter-label">{label}</div>
        <Select
          value={value}
          className="filter-select"
          items={values}
          onChange={handleChange}
        />
      </StyledFilterItem>
    </div>
  );
}
