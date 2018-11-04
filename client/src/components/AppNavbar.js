import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav navbar>
              
                <NavItem>
                  <NavLink href="/bmicalc">BMI Calculator</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/caloriecalc">Calorie Calculator</NavLink>
                </NavItem>

                {/* <NavItem>
                  <NavLink href="/bfcalc">Body Fat Calculator</NavLink>
                </NavItem> */}

                {/* <NavItem>
                <NavLink href="#">Meal Planner</NavLink>
              </NavItem> */}

                {/* <NavItem>
                  <NavLink href="/ShoppingList">Shopping List</NavLink>
                </NavItem> */}

                <NavItem>
                  <NavLink href="/Contact">Contact</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/About">About</NavLink>
                </NavItem>
              </Nav>


            </Collapse>
          </Container>
        </Navbar>
      </div>
    );

  }
}

export default AppNavbar;