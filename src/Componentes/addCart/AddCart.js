import React, { Component } from 'react';
import fire from './../../fire';
import Navbars from './../navbar/Navbar';

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
      <div>
        <h2>Tu Carrito de Compras</h2>
        <ul>
          {
            this.state.items.map((e, i) => (
              <li key={i}>
                <div>
                  <p>nombre: {e.title}  precio: {e.price}</p>
                </div>
                <button onClick={() => this.borrar(e)}>borrar</button>
              </li>
            ))
          }
        </ul>
        <p>Total: ${this.sumaTotal()}</p>
      </div>
    )
  }
}

export default AddCart;