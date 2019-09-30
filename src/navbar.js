import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="mailto:george130562@yahoo.com?Subject=Contact">
            {" "}
            Contact{" "}
          </NavbarBrand>{" "}
          <NavItem> Phone: 424 - 202 - 4770 </NavItem>{" "}
          <NavbarToggler onClick={this.toggle} />{" "}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/jorgeluis-flores/">
                  LinkedIn{" "}
                </NavLink>{" "}
              </NavItem>{" "}
              <NavItem>
                <NavLink href="https://github.com/JorgeLuisFlores">
                  GitHub{" "}
                </NavLink>{" "}
              </NavItem>{" "}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects{" "}
                </DropdownToggle>{" "}
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <NavLink href="https://refugee-stories-marketing.netlify.com/index.html">
                      Refugee Stories{" "}
                    </NavLink>{" "}
                  </DropdownItem>{" "}
                  <DropdownItem>
                    {" "}
                    <NavLink href="#"> Project 2(Coming Soon) </NavLink>{" "}
                  </DropdownItem>{" "}
                  <DropdownItem divider />
                  <DropdownItem> Coming Soon </DropdownItem>{" "}
                </DropdownMenu>{" "}
              </UncontrolledDropdown>{" "}
            </Nav>{" "}
          </Collapse>{" "}
        </Navbar>{" "}
      </div>
    );
  }
}

// import { Navbar } from "reactstrap";

// function Navigation() {
//   return (
//     <div>
//       <Navbar></Navbar>
//     </div>
//   );
// }

// export default Navigation;
