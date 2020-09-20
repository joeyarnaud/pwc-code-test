import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SearchLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.fontMd};
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.fontMd};
`;

/**
 *
 * @param {*} props
 * @desc The search bar for searching different cities
 */
const Search = (props) => {
  const { label, placeholder, handleChange, value, handleSubmit } = props;

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchLabel>{label}</SearchLabel>
      <SearchInput
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </SearchForm>
  );
};

Search.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
