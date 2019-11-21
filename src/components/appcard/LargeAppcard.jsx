import React from 'react';
import { string, shape } from 'prop-types';
import { Grid, Link } from '@material-ui/core';

import { RatingBar } from '..';

const LargeAppcard = ({
  app: {
    name, description, image, link,
  },
}) => (
  <>
    <Grid container justify="center" spacing={5}>
      <Grid item xs={3}>
        <img src={image} alt={name} width="300px" height="300px" style={{ borderRadius: '1rem' }} />
      </Grid>
      <Grid item xs={9}>
        <h4 style={{ fontSize: '2rem', textAlign: 'left' }}>{name}</h4>
        <div align="left"><RatingBar /></div>
        <p style={{ fontSize: '1.5rem', textAlign: 'left' }}>{description}</p>
        <div style={{ textAlign: 'left' }}>
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            {`Find out more about ${name}`}
          </Link>
        </div>
      </Grid>
    </Grid>
    <hr style={{ margin: '3rem 0' }} />
  </ >
);


LargeAppcard.propTypes = {
  app: shape({
    name: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    link: string.isRequired,
  }).isRequired,
};

export default LargeAppcard;
