import React from 'react';
import PropTypes from 'prop-types'



const SearchInput = (props) => {
  const { value, onChange } = props;

  return (
  
        <input className = "textControl"
          type="text"
          placeholder="Enter a search term"
          onChange={e => onChange(e.target.value)}
  value={value}/> )
      
  }


SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
