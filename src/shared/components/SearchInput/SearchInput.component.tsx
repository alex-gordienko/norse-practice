import React from 'react';
import Input from '../Input';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

export default function SearchInput() {
  return (
    <Input
      prependComponent={<SearchIcon />}
      type="Search"
      placeholder="Search"
    />
  );
}
