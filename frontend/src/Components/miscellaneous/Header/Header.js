// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../../images/1.png'
import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
import logo from '../../../images/1.png';
import './Header.css';

const options = {
    burgerColorHover: "black",
    logo,
    logoWidth: "20vmax",
    navColor1: "#e5e5e5",
    // logoHoverSize: "10px",
    logoHoverColor: "#ad9551",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "2vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#ad9551",
    link1Margin: "1vmax",
    profileIconUrl: "/profile",
    profileIcon:true,
    profileIconColor: "black",
    ProfileIconElement: MdAccountCircle,
    searchIcon:true,
    SearchIconElement:MdSearch,
    cartIcon:true,
    searchIconColor: "rgba(35, 35, 35,0.8)",
    CartIconElement:MdAddShoppingCart,
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#ad9551",
    searchIconColorHover: "#ad9551",
    cartIconColorHover: "#ad9551",
    cartIconMargin: "1vmax",
    searchIconSize: "2vmax",
    cartIconSize: "2vmax",
    profileIconSize: "2vmax",
  };    

const Header = () => {
  // return (
    // <>
    //  <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container fluid>
    //     <Navbar.Brand href="#"><img src={logo} style={{width:'80px'}}/></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </>
    // )
    return <ReactNavbar {...options} />;
}

export default Header