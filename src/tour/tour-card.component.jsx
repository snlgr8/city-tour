import {
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from '@material-ui/core';
import React from 'react';

function TourCard({ city }) {
  return (
    <Card variant='outlined' style={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={`/static/images/${city.imageUrl}`}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant='h5' component={'span'}>
          {city.name}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {city.description}
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: 'center' }}>
        <Button size='small' color='primary' variant='contained'>
          View Tours
        </Button>
      </CardActions>
    </Card>
  );
}

export default TourCard;
