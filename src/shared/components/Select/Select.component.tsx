import React from 'react';
import StyledSelect from './Select.styled';
import Options from '../OptionsDropdown';

interface ISelectProps {
  items: string[];
  className?: string;
  value: string;
  onChange?(value: string): void;
}

interface ISelectState {
  visible: boolean;
}

export default class Select extends React.PureComponent<
  ISelectProps,
  ISelectState
> {
  public state = {
    visible: false
  };

  private readonly wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISelectProps) {
    super(props);
    this.wrapperRef = React.createRef();
    this.setVisible = this.setVisible.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  public handleSelect(value: string) {
    this.setState({
      visible: false
    });
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  }

  public setVisible() {
    this.setState({
      visible: true
    });
  }

  public handleBodyClick = (e: MouseEvent) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(e.target as HTMLElement)
    ) {
      this.setState({ visible: false });
    }
  };

  public componentDidUpdate(prevState: any) {
    {
      if (prevState.visible !== this.state.visible) {
        if (this.state.visible) {
          document.body.addEventListener('click', this.handleBodyClick);
        } else {
          document.body.removeEventListener('click', this.handleBodyClick);
        }
      }
    }
  }

  public render() {
    return (
      <StyledSelect
        active={this.state.visible}
        className={this.props.className}
        ref={this.wrapperRef}
      >
        <input
          type="text"
          value={this.props.value}
          onClick={this.setVisible}
          readOnly={true}
        />
        <span />
        <div className="select-options">
          <Options
            visible={this.state.visible}
            data={this.props.items}
            onSelect={this.handleSelect}
          />
        </div>
      </StyledSelect>
    );
  }
}
