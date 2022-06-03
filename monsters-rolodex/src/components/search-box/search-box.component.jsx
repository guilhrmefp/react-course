import { Component } from 'react';

class SearchBox extends Component {

  render() {
    const {
      className,
      placeholder,
      onChange,
    } = this.props;

    return (
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

}

export default SearchBox;
