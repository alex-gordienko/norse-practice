import React from 'react';
import { LongText } from './TextArea.styled';

interface ITextAreaProps {
  placeholder?: string;
  children?: string;
}

class TextArea extends React.PureComponent<ITextAreaProps> {
  constructor(props: Readonly<ITextAreaProps>) {
    super(props);
  }
  public render() {
    return (
      <LongText placeholder={this.props.placeholder}>
        {this.props.children}
      </LongText>
    );
  }
}
export default TextArea;
