import React from 'react';
import { withStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Eco } from '@material-ui/icons';

import { palette } from '../../assets/theme';

const { primary, secondary } = palette;

const StyledRating = withStyles({
  iconFilled: {
    color: secondary.main,
  },
  iconHover: {
    color: primary.main,
  },
})(Rating);

const getLabelText = (value) => `${value} Lea${value !== 1 ? 'ves' : 'f'}`;

const RatingBar = () => (
  <StyledRating
    name="customized-color"
    size="large"
    value={2}
    getLabelText={getLabelText}
    precision={0.5}
    icon={<Eco fontSize="inherit" />}
  />
);

export default RatingBar;
