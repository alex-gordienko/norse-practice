import React from 'react';
import Filters from './Filters.component';

interface IFiltersContainerState {
  [name: string]: string;
}

class FiltersContainer extends React.PureComponent<{}, IFiltersContainerState> {
  public state = {};

  public handleChange = (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  public render() {
    return (
      <React.Fragment>
        <Filters data={this.state} onChange={this.handleChange} />
        {JSON.stringify(this.state)}
      </React.Fragment>
    );
  }
}

export default FiltersContainer;
