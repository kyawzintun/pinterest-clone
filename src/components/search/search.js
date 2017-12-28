import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';

import './search.css';

class SearchInput extends Component {
  state = {  }
  render() {
    return (
      <Input icon iconPosition="left" placeholder='Search...' className="search-input" autoComplete="off">
        <input />
        <Icon name='search' size="large"/>
      </Input>
    );
  }
}

export default SearchInput;