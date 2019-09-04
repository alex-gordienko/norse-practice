import React, { useState } from 'react';
import StyledInput from './Input.styled';

interface IInputProps {
  prependComponent?: React.ReactNode;
  type?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
}

const defaultProps: IInputProps = {
  pattern: '',
  placeholder: '',
  prependComponent: null,
  required: false,
  type: ''
};

export default function Input({
  prependComponent,
  ...inputProps
}: IInputProps) {
  const [value, setValue] = useState('');
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <StyledInput>
      {prependComponent}
      <input {...inputProps} value={value} onChange={handleChange} />
    </StyledInput>
  );
}
Input.defaultProps = defaultProps;
