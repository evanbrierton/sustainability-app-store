import React from 'react';
import { string } from 'prop-types';
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles,
} from '@material-ui/core';

const Appcard = ({
  name, description, image, link,
}) => {
  const { card, media, content } = makeStyles({
    // card: { maxWidth: '20vw' },
    media: { maxWidth: '100%', height: '20rem' },
    content: { height: '15rem' },
  })();

  return (
    <Card raised className={card}>
      <CardActionArea>
        <a href={link}>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={image}
            title={name}
            className={media}
          />
        </a>
      </CardActionArea>
      <CardContent height="200" className={content}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

Appcard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  link: string.isRequired,
};

export default Appcard;
