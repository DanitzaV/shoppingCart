import React from "react";
import Shopping from './components/list/Shopping';
import List from './components/navbar/List';
import { Grid } from "@material-ui/core";

const App = () => (
  <Grid container className="">
    <Grid item md={6} style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
      <h2 style={{textAlign: "center"}}>Productos</h2>
      <List />
    </Grid>
    <Grid item md={6}>
      <div className="">
        <h2 style={{textAlign: "center"}}>Carrito de Compras</h2>
      </div>
      <div>
        <Shopping />
      </div>
    </Grid>

  </Grid>
);
export default App;
