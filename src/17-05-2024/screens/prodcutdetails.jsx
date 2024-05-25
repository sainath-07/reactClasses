import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { eachobjectempty } from "../utillis/functions";

const Eachproductdetails = () => {
  const [eachproductitem, seteachproductitem] = useState({});

  const { productsID } = useParams();

  useEffect(() => {
    fetcheachproduct();
  }, [productsID]);

  const fetcheachproduct = async () => {
    let result = await axios.get(
      `https://dummyjson.com/products/${productsID}`
    );
    console.log(result.data);
    seteachproductitem(result.data);
  };

  const { title, description, price, discountPercentage, rating, stock, brand, category, images } = eachproductitem;

  return (
    <Container className="mt-4 ">
      {eachobjectempty(eachproductitem) ? (
        <>
          <Row className="mb-4">
            <Col>
              <h1>{title}</h1>
              <p>{description}</p>
            </Col>
          </Row>

          <Row >
            <Col md={6}>
              <Carousel className="bg-light ">
                {images && images.map((image, index) => (
                  <Carousel.Item key={index}  >
                    <img
                      className="d-block "
                     style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain" 
                     }}
                      src={image}
                      alt={`${title} image ${index + 1}`}
                     
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={6} >
              <Card>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text><strong>Price:</strong> ${price}</Card.Text>
                  <Card.Text><strong>Discount:</strong> {discountPercentage}%</Card.Text>
                  <Card.Text><strong>Rating:</strong> {rating} / 5</Card.Text>
                  <Card.Text><strong>Stock:</strong> {stock} units</Card.Text>
                  <Card.Text><strong>Brand:</strong> {brand}</Card.Text>
                  <Card.Text><strong>Category:</strong> {category}</Card.Text>
                  <div className="d-flex gap-2 mt-4 ">
                    <Button variant="primary" size="lg">Add to Cart</Button>
                    <Button variant="success" size="lg">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
          <h1>Data is loading.....</h1>
        )}
        </Container>
  );
};

export default Eachproductdetails;