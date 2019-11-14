import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

import Appcard from '../../components/appcard';

const Featured = ({ apps }) => (
  <section className="Featured">
    <Typography variant="h2">
      Featured Apps
    </Typography>
    <hr />
    <Grid container justify="center" spacing={5}>
      {apps.map(({
        id, name, description, image, link,
      }) => (
        <Grid item xs={3} key={id}>
          <Appcard
            name={name}
            description={description}
            image={image}
            link={link}
          />
        </Grid>
      ))}
    </Grid>
  </section>
);

Featured.propTypes = {
  apps: arrayOf(
    shape({
      id: string, name: string, description: string, img: string, link: string,
    }),
  ).isRequired,
};

export default Featured;
