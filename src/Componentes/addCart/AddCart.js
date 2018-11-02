import React, { Component } from 'react';
import fire from './../../fire';
import { Container, Row, Col, Button } from 'reactstrap';
import './Style.css'

class AddCart extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.itemsRef = fire.database().ref('addCarrito')

  }

  sumaTotal() {
    let total = this.state.items;
    let sumatotal = 0;
    for (let i = 0; i < total.length; i++) {
      sumatotal = sumatotal + total[i].price

    }
    return Math.round(sumatotal);
  }

  componentDidMount() {
    const { items } = this.state;

    this.itemsRef.on('child_added', newPost => {
      items.push({
        key: newPost.key,
        id: newPost.val().id,
        title: newPost.val().title,
        price: newPost.val().price,
      })
      this.setState({ items })
    })

    this.itemsRef.on('child_removed', removepost => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].key === removepost.key) {
          items.splice(i, 1)
        }
      }
      this.setState({ items })
    })

  }

  borrar(e) {
    this.itemsRef.child(e.key).remove()
  }



  render() {
    return (
      <Container>
        <h2 style={{ marginBottom: "2em",marginTop: "1em"}}>Tu Carrito de Compras</h2>
        <Row>
          {
            this.state.items.map((e, i) => (
              <Col xs="12" className="contenedor" key={i}>
                <p style={{ marginLeft: "2em" }}>
                  <strong>Nombre: </strong>{e.title}
                </p>
                <p style={{ marginLeft: "2em" }}>
                  <strong>Precio: </strong>{e.price}
                </p>
                <Button style={{ marginLeft: "2em" }} onClick={() => this.borrar(e)}>borrar</Button>
              </Col>
            ))
          }
        </Row>
        <p><strong>Total: </strong> ${this.sumaTotal()}</p>
      </Container>
    )
  }
}


export default AddCart;