import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import fire from './../../fire';

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
    this.datosCarrito = this.datosCarrito.bind(this);
    this.itemsRef = fire.database().ref('items');
  }

  datosCarrito(e) {
    const newMessageKey = fire.database().ref().child('addCarrito').push().key;
    fire.database().ref(`addCarrito/${newMessageKey}`).set({
      id: e.id,
      title: e.title,
      price: e.price
    });
  }

  componentDidMount() {
    const { items } = this.state;
    this.itemsRef.on('child_added', newPost => {
      items.push({
        id: newPost.val().id,
        title: newPost.val().title,
        price: newPost.val().price,
      })
      this.setState({ items })
    })
  }

 
  

  render() {

    const data = this.state.items.map((e, i) => (
      <Col sm="6" key={i} style={{padding: "2em"}}>
        <Card body >
          <CardTitle><strong>Nombre: </strong> {e.title}</CardTitle>
          <CardText><strong>Precio: </strong> {e.price}</CardText>
          <Button onClick={() => this.datosCarrito(e)}>Agregar al carrito</Button>
        </Card>
      </Col>
    ))

    return (
      <div>
        <h1>Productos</h1>
        <Row style={{ marginRight: "0px"}}>
        
          {
            data
          }
        </Row>
      </div>

    )
  }
}

export default List;