import React from 'react';
import PropTypes from 'prop-types';

const StyleName = ({ currentStyle }) => (
  <div>
    <h3 className="styles-name">
      Style →&nbsp;
    </h3>
    <h3 className="styles-name-selected">
      {currentStyle.name}
    </h3>
  </div>
);

export default StyleName;
