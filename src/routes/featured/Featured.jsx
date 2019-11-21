import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

import { Appcard } from '../../components';

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
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <Appcard
            app={{
              name, description, image, link,
            }}
          />
        </Grid>
      ))}
    </Grid>
    <div style={{ margin: '3rem 0' }}>
      <Link to="/apps" className="Link">See More Apps</Link>
    </div>
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
