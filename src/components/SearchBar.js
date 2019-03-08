import React from 'react';
import posed from 'react-pose';

const Form = posed.form({
  open: {
    delayChildren: 300,
    staggerChildren: 100
  },
  closed: {
    delayChildren: 300,
    staggerChildren: 100
  }
});

const Label = posed.label({
  open: { y: 0, opacity: 1 },
  closed: { y: 60, opacity: 0 }
});

const Input = posed.input({
  open: { y: 0, opacity: 1 },
  closed: { y: 60, opacity: 0 }
});

const SearchBar = ({ handleSubmit, value, handleChange, isActive }) => (
  <Form className="search__form" onSubmit={handleSubmit} autoComplete="off" pose={isActive ? 'open' : 'closed'}>
    <Label className="search__label" htmlFor="search">
      Enter City or Zip
    </Label>
    <Input
      className="search__input"
      id="search"
      type="text"
      value={value}
      onChange={handleChange}
      autoFocus
    />
  </Form>
);

export default SearchBar;
