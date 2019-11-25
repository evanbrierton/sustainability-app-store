import React from 'react';
import {
  string, shape, number, func,
} from 'prop-types';

import SmallAppcard from './SmallAppcard';
import LargeAppcard from './LargeAppcard';

const Appcard = ({ app, size, updateRating }) => (
  <div>
    {size === 'small' ? <SmallAppcard app={app} /> : <LargeAppcard app={app} updateRating={updateRating} />}
  </div>
);

Appcard.propTypes = {
  app: shape({
    name: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    link: string.isRequired,
    rating: number,
  }).isRequired,
  size: string,
  updateRating: func.isRequired,
};

Appcard.defaultProps = { size: 'small' };

export default Appcard;
