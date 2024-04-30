//24-04-2024
// import Iplcomponent from "./24-04-2024/components/filter/filter"
// import Iplcomponent1 from "./24-04-2024/components/map ,filter,reduce/breakdown"
import Reduce from "./24-04-2024/components/map ,filter,reduce/reduce"

// Exports 
import Heading1,{Heading2,Heading3} from "./24-04-2024/components/exports&imports/image";
// Changing the components names
// import Thisheading1,{Heading2 as Thisheading2,Heading3 as Thisheading3} from "./24-04-2024/components/exports&imports/image";

import IplMatches from "./24-04-2024/components/Task/map,filter,reduce,destructring";
import HeadingTag from "./JsxAttributes/heading";
import Header from "./Component/Header";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Ui = () => {
  return (

    <div>


      {/* components */}

       <Header/>

       <Container fluid>
      <Row>
        <Col className="border border-dark bg-dark text-danger text-center"><h1>Our course...</h1></Col>
      </Row>
       <Row className="mt-5">
        
      

        <Col className="col-lg-3"> 
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      

        <Col className="col-lg-3"> 
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      

        <Col className="col-lg-3"> 
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      

        <Col className="col-lg-3"> 
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      

       </Row>
    </Container>

 </div>

  )
}

export default Ui
