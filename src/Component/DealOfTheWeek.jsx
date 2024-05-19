import React from 'react';
import { Carousel, Card, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const dealsOfTheWeek = [
  {
    title: "When We Believed in Mermaids: A Novel",
    author: "Barbara O'Neal",
    price: "$2.00",
    originalPrice: "$5",
    type: "Paperback",
    imgSrc: "/Mermaid.jpg"
  },
  {
    title: "Angry God (All Saints High Book 3)",
    author: "L.J. Shen",
    price: "$1.30",
    originalPrice: "$5",
    type: "Kindle",
    imgSrc: "/AngryGod.jpg"
  },
  {
    title: "Last Day",
    author: "Luanne Rice",
    price: "$1.75",
    originalPrice: "$5",
    type: "Kindle",
    imgSrc: "/LastDay.jpg"
  },
  {
    title: "Winter Garden",
    author: "Kristin Hannah",
    price: "$11.99",
    originalPrice: "$20",
    type: "Paperback",
    imgSrc: "/WinterGarden.jpg"
  },
  // Additional books can be added here if more than two are needed 
];

  
export const DealOfTheWeek = () => {
  const chunkSize = 2; // Two cards per slide
  const carouselItems = [];

  for (let i = 0; i < dealsOfTheWeek.length; i += chunkSize) {
    carouselItems.push(dealsOfTheWeek.slice(i, i + chunkSize));
  }

  return (
    <div style={{ backgroundColor: '#FFF6F6', width: '100%', padding: '50px 0' }}>
      <Container fluid className="my-5">
        <h2 className="text-center mb-4">Deals of the Week</h2>
        <Carousel indicators={true} interval={null}
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ backgroundColor: 'black' }} />}
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ backgroundColor: 'black' }} />}
        >
          {carouselItems.map((chunk, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {chunk.map((book, index) => (
                  <Col key={index} xs={12} sm={6} style={{ maxWidth: '560px', flex: 'none' }} className="d-flex flex-column align-items-center">
                    <Card className="flex-row w-100 mb-2" style={{
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <Card.Img variant="left" src={book.imgSrc} style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
                      <Card.Body style={{ width: '60%' }}>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-danger">{book.type}</Card.Subtitle>
                        <Card.Text>{book.author}</Card.Text>
                        <Card.Text><strong>{book.price}</strong></Card.Text>
                      </Card.Body>
                    </Card>
                    <Button variant="primary" className="w-50">Add To Cart</Button>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};


export default DealOfTheWeek