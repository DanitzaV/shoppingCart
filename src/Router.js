import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect} from 'react-router-dom';
import App from './App';
import List from './Componentes/list/List';
import AddCart from './Componentes/addCart/AddCart';

export default class Router extends Component {

  render() {
    return (
      <ReactRouter>
        <App>
          <Route path="/" component={() => <Redirect to="home"></Redirect>} ></Route>
          <Route path="/home" component={List}></Route>
          <Route path="/addCart" component={AddCart}></Route>
        </App>
      </ReactRouter>
    )

  }
}