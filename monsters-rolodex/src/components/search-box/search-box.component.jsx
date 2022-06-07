import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChange }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SearchBox;
