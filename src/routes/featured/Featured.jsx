import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Appcard from '../../components/appcard';

const Featured = () => (
  <section className="Featured">
    <Typography variant="h2">
      Featured Apps
    </Typography>
    <hr />
    <Grid container justify="center" spacing="5">
      {Array(4).fill().map(() => (
        <Grid item xs="3">
          <Appcard
            name="Ecosia"
            description="Ecosia uses the profit they make from your searches to plant trees where they are needed most. Get the free browser extension and plant trees with every search."
            img="https://pbs.twimg.com/profile_images/1097529058278158339/FiqTujWY_400x400.png"
            link="https://info.ecosia.org/"
          />
        </Grid>
      ))}
    </Grid>
  </section>
);

export default Featured;
