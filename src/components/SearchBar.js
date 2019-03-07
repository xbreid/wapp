import React from 'react';

const SearchBar = ({handleSubmit, value, handleChange}) => (
  <form className="search__form" onSubmit={handleSubmit}>
    <label className="search__label" htmlFor="search">
      Enter City or Zip
    </label>
    <input
      className="search__input"
      id="search"
      type="text"
      value={value}
      onChange={handleChange}
      autoFocus
    />
  </form>
);

export default SearchBar;
