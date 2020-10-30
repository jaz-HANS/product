import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';

const SizeDropdown = ({ currentStyle, setSku }) => {
  let options = [];
  if (
    currentStyle.skus.length !== 0
    || Object.keys(currentStyle.skus) !== null
    || Object.keys(currentStyle.skus) !== undefined) {
    options = Object.keys(currentStyle.skus);
  }

  const handleSetSku = (value) => {
    setSku(value);
  };
  return (
    <Dropdown
      options={options}
      value="size"
      onChange={(value) => handleSetSku(value)}
      placeholder="Select an option"
    />
  );
};

export default SizeDropdown;
