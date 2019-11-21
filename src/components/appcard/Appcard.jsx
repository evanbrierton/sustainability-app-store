import React from 'react';
import { string, shape } from 'prop-types';

import SmallAppcard from './SmallAppcard';
import LargeAppcard from './LargeAppcard';

const Appcard = ({ app, size }) => (
  <div>
    {size === 'small' ? <SmallAppcard app={app} /> : <LargeAppcard app={app} />}
  </div>
);

Appcard.propTypes = {
  app: shape({
    name: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    link: string.isRequired,
  }).isRequired,
  size: string,
};

Appcard.defaultProps = { size: 'small' };

export default Appcard;
