import React, { Component } from 'react';
import { connect } from "react-redux";
import { todosRef } from './../../fire';
import * as actions from "../../actions";
import { Grid, Paper, Button } from '@material-ui/core'
import './../../App.css';

const mapStateToProps = state => {
  return { addCart: state.firedatabase.addCart };
};

class ShoppingList extends Component {
  componentWillMount() {
    this.props.fetchToDos()
  }
  borrar(e) {
    todosRef.child(e.key).remove()
    this.props.removeItems(e.key)
  }
  render() {
    return (
      <Grid container direction="column"
        justify="center"
        alignItems="center">
        {
          this.props.addCart.map((e, i) => (
            <Grid item key={i}>
              <Paper key={i} className="paper-shopping">
                <p>{e.title}</p>
                <p>$ {e.price}</p>
                <Button variant="contained" onClick={() => this.borrar(e)}>borrar</Button>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    )
  }
}
const Shopping = connect(mapStateToProps, actions)(ShoppingList);
export default Shopping;