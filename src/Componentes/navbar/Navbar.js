import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';

import { Link } from 'react-router-dom';
import fire from '../../fire'

export default class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      items: []
    };
    this.itemsRef = fire.database().ref('addCarrito')
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount(){
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

  
  render() {
  let badges = this.state.items.length;
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Link to="/home">
              <p>Productos</p>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <div>
                <Link to="/addCart">
                  <p>Carrito: <Badge pill>{badges}</Badge></p>
                </Link>
                </div>
               
              </NavItem>
              <NavItem>
                <NavLink ></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}
