import React from 'react';
import Input from '../../../../Input';
import TextArea from '../../../../TextArea';
import StyledTextInput from './EditorTextInput.styled';
import { FieldName, Element } from '../../EditorBlock.styled';

interface IEditorItemProps {
  label: string;
  placeholder: string;
  lenght: 'TextInput' | 'TextArea';
  type?: string;
  pattern?: string;
  required?: boolean;
}

export default function InputEditorItem({
  label,
  placeholder,
  lenght,
  type,
  pattern,
  required
}: IEditorItemProps) {
  return (
    <StyledTextInput>
      <FieldName>{label}</FieldName>
      <Element>
        {lenght === 'TextInput' ? (
          <Input
            required={required}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
          />
        ) : (
          <div className="long-text">
            <TextArea placeholder={placeholder} />
          </div>
        )}
      </Element>
    </StyledTextInput>
  );
}
