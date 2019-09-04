import React from 'react';
import TextArea from '../../../TextArea';
import { StyledEducationBlock } from './EducationBlock.styled';
import { SubHeader } from '../../ProfileEditor.styled';

const EducationBlock = () => (
  <StyledEducationBlock>
    <SubHeader>Education</SubHeader>
    <div className="input-field">
      <TextArea placeholder="Enter education" />
    </div>
  </StyledEducationBlock>
);

export default EducationBlock;
