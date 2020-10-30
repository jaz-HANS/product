import React from 'react';
import PropTypes from 'prop-types';

const StylePrice = ({ currentStyle }) => {
  if (currentStyle.sale_price > 0) {
    return (
      <div>
        <div className="price price-original">
          $
          {
        currentStyle.original_price
        }
        </div>
        <div className="price price-sale">
        &nbsp;$
          {
        currentStyle.sale_price
        }
        </div>
      </div>
    );
  }
  return (
    <div className="price">
      $
      {
      currentStyle.original_price
    }
    </div>
  );
};

export default StylePrice;
