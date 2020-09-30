import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const StarRating = ({ rating, count }) => (
  <div>
    <StarRatings
      rating={rating}
      starRatedColor="#F5B895"
      starEmptyColor="#B5C7D3"
      numberOfStars={5}
      starDimension="25px"
      starSpacing="1px"
      name="rating"
    />
    <div className="stars-review-link stars-spacing">
      <a href="https://github.com/callback-kids/ratings-and-reviews">
        View&nbsp;
        {count}
        &nbsp;Reviews
      </a>
    </div>
  </div>
);

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default StarRating;
