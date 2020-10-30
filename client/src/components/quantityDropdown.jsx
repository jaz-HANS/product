import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';

const QuantityDropdown = ({ currentStyle, sku }) => {
  let options = ['select a size'];

  if (currentStyle.skus[sku.label] !== undefined) {
    options = Array.from({ length: currentStyle.skus[sku.label] }, (_, i) => i + 1);
  }
  return (
    <Dropdown
      options={options}
      // onChange={}
      value="quantity"
    />
  );
};

export default QuantityDropdown;
