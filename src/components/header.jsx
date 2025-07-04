 import React, { useEffect } from 'react'
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
import axios from 'axios';
const header = () => {
    const { carts } = useSelector((state) => state.allCart) 
    const [categrr,setCategrr]= useState([]);
    const ctegrs = async() =>{
        const list = await axios.get('https://dummyjson.com/products/category-list')
        setCategrr(list.data)  
    }
    console.log(categrr) 
     useEffect(() => {
        ctegrs();
        }, []);
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Navbar style={{ height: "60px", backgroundColor: "#343a40", color: "white",margin:"0",padding:"0"}}>
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
                                    {categrr.map((ele)=>{
                                        return(
                                              <NavLink style={{ color: "white" }} to={`/${ele}`}><Button variant='dark' style={{ width: "350px"}}>{ele}</Button></NavLink> 
                                        )  
                                    })} 
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
