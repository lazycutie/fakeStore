import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const header = () => {
    const { carts } = useSelector((state) => state.allCart)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Navbar style={{ height: "60px", backgroundColor: "#343a40", color: "white"}}>
                <Container>
                    <h3 className='text-light'>Fake Store</h3>

                    <ButtonToolbar aria-label="Toolbar with button groups" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ButtonGroup className="me-2 d-flex" aria-label="First group">
                            <Button variant="dark" style={{ backgroundColor: "#343a40", border: "none" }} onClick={handleShow}>
                                <i class="fa-solid fa-bars"></i>
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>categories</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body style={{ display: 'flex', flexDirection: 'column', gap: '20px', }} >
                                    <NavLink style={{ color: "white" }} to="/beauty"><Button variant='dark' style={{ width: "350px"}}>Beauty</Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/fragrances"><Button variant='dark' style={{ width: "350px"}}>Fragrances </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/furniture"><Button variant='dark' style={{ width: "350px"}}>Furniture </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/groceries"><Button variant='dark' style={{ width: "350px"}}>Groceries </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/home-decoration"><Button variant='dark' style={{ width: "350px"}}>Home-decoration </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/kitchen-accessories"><Button variant='dark' style={{ width: "350px"}}>Kitchen-accessories </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/laptops"><Button variant='dark' style={{ width: "350px"}}>Laptops </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/mens-shirts"><Button variant='dark' style={{ width: "350px"}}>Mens-shirts </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/mens-shoes"><Button variant='dark' style={{ width: "350px"}}>Mens-shoes </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/mens-watches"><Button variant='dark' style={{ width: "350px"}}>Mens-watches </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/mobile-accessories"><Button variant='dark' style={{ width: "350px"}}>Mobile-accessories </Button></NavLink>
                                     <NavLink style={{ color: "white" }} to="/motorcycle"><Button variant='dark' style={{ width: "350px"}}>Motorcycle </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/skin-care"><Button variant='dark' style={{ width: "350px"}}>Skin-care </Button></NavLink>
                                     <NavLink style={{ color: "white" }} to="/smartphones"><Button variant='dark' style={{ width: "350px"}}>smartphones </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/sports-accessories"><Button variant='dark' style={{ width: "350px"}}>Sports-accessories </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/sunglasses"><Button variant='dark' style={{ width: "350px"}}>Sunglasses </Button></NavLink>
                                     <NavLink style={{ color: "white" }} to="/tablets"><Button variant='dark' style={{ width: "350px"}}>Tablets </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/tops"><Button variant='dark' style={{ width: "350px"}}>Tops </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/vehicle"><Button variant='dark' style={{ width: "350px"}}>Vehicle </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/womens-bags"><Button variant='dark' style={{ width: "350px"}}>Womens-bags </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/womens-dresses"><Button variant='dark' style={{ width: "350px"}}>Womens-dresses </Button></NavLink>
                                    <NavLink style={{ color: "white" }} to="/womens-jewellery"><Button variant='dark' style={{ width: "350px"}}>Womens-jewellery </Button></NavLink>
                                   <NavLink style={{ color: "white" }} to="/womens-shoes"> <Button variant='dark' style={{ width: "350px"}}>Womens-shoes </Button></NavLink>
                                     <NavLink style={{ color: "white" }} to="/womens-watches"><Button variant='dark' style={{ width: "350px"}}>Womens-watches </Button></NavLink>
                                </Offcanvas.Body> 
                            </Offcanvas>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <NavLink to="/" className="text decoration-none text-light mx-2">
                                <div id='ex4'>
                                    <span className='p1 fa-stack fa-2x  '  >
                                        <i className="fa-solid fa-house-chimney"></i>
                                    </span>
                                </div>
                            </NavLink>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Third group">
                            <NavLink to="/cart" className="text decoration-none text-light mx-2">
                                <div id='ex4'>
                                    <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </span>
                                </div>
                            </NavLink>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Container>
            </Navbar>
            <br />

        </>
    );
}
export default header