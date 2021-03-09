import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import TourCard from './tour-card.component';

class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Typography component={'span'} variant='h3'>
          {this.props.title}
        </Typography>
        <Grid container spacing={3}>
          {data.map((city) => (
            <Grid item xs={3} key={city.id}>
              <TourCard city={city}></TourCard>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Tour;
