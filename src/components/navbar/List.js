import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

import img from './../../img/xd.png';
import { connect } from "react-redux";
import * as actions from "../../actions";

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

const mapStateToProps = state => {
  return { items: state.firedatabaseProductos.items };
};


class MediaControlCard extends Component {
  enviar(e) {
    this.props.addItems(e)
  }
  componentWillMount() {
    this.props.Products()
  }
  render() {
    const { classes } = this.props
    return (
      <Grid container justify="space-evenly">
        {
          this.props.items.map((e, i) => (
            <Grid item xs={6} sm={6} md={6} key={i}>
              <Card style={{ maxWidth: "max-content", margin: "2em" }} className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {e.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      $ {e.price}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <Button onClick={() => this.enviar(e)} variant="contained" color="primary">Añadir al carrito</Button>
                  </div>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={img}
                  title="img"
                />
              </Card>
            </Grid>
          ))
        }
      </Grid>

    );
  }

}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const Styles = withStyles(styles, { withTheme: true })(MediaControlCard)
const Items = connect(mapStateToProps, actions)(Styles)
export default Items;

