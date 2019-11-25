import React from 'react';
import { number, func, string } from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Eco } from '@material-ui/icons';

import { palette } from '../../assets/theme';

const { primary, secondary } = palette;

const getLabelText = (value) => `${value} Lea${value !== 1 ? 'ves' : 'f'}`;

const RatingBar = ({ rating, updateRating, id }) => {
  const StyledRating = withStyles({
    iconFilled: {
      color: secondary.main,
    },
    iconHover: {
      color: primary.main,
    },
  })(Rating);

  return (
    <StyledRating
      onChange={({ target: { value } }) => {
        console.log(id);
        updateRating(+value, id);
      }}
      name="app-rating"
      size="large"
      value={rating}
      getLabelText={getLabelText}
      precision={0.5}
      icon={<Eco fontSize="inherit" />}
    />
  );
};

RatingBar.propTypes = { rating: number, updateRating: func.isRequired, id: string.isRequired };
RatingBar.defaultProps = { rating: 2.5 };

export default RatingBar;
