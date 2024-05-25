import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Nav } from "react-bootstrap";
import { eachobjectempty } from "../utillis/functions";
import SyncLoader from 'react-spinners/SyncLoader';
import "./images.css"


    
    
// Component
const HomeScreen = () => {
  const [productlist, setproducts] = useState([]);

console.log(productlist)
  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    let response = await axios.get('https://dummyjson.com/products/');
    setproducts(response.data.products);
  };



  return (
    <>
      <Navbar />
      <Container fluid className="mt-4">
        
        {
            eachobjectempty(productlist) ? 
            <>
            <Row className="d-flex flex-wrap ">
          {

            
            productlist.map((eachproduct) => {
              const { brand, thumbnail, id, title, price } = eachproduct;
              return (
                <Col key={id} md={3} className="mb-4  d-flex flex-wrap justify-content-center  images">
                  <Card className="w-100">
                   

                    <img
                      className="d-block mx-auto"
                     style={{
                        width: "80%",
                        height: "250px",
                        objectFit: "contain" 
                     }}
                      src={thumbnail}
                      alt={`${title} `}
                     
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Brand: {brand}</Card.Text>
                        <Card.Text>Price: ${price}</Card.Text>
                      </div>
                      <div className="d-flex justify-content-center">
                 
                        <Button variant="warning" as={Link} to={`/${brand}/${id}`}>
                          View Product
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
            </>
            :
            <>
      <div className="loader-container" style={{
        display:"flex",
        justifyContent: "center"
      }}>
      <SyncLoader color="#36d7b7" />
    </div>

         
            </>
        
        }
        
      </Container>
    </>
  );
};

export default HomeScreen;
