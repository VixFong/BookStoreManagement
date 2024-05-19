import React, { useState } from 'react';
import { Tab, Tabs, Card, Button, Row, Col, Container } from 'react-bootstrap';

const booksData = {
    history: [
        { format:"Hardcover", title: "All You Can Ever Know: A Memoir", author: "J. D. Robb", price: "$14.20", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Broken Faith: Inside the Word of Faith...", author: "Edward Lee", price: "$10.29", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Eternity Springs: The McBrides of Texas Ev...", author: "Emily March", price: "$6.99", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Jesus: The God Who Knows Your Name", author: "Max Lucado", price: "$16.59", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Next Level Basic: The Definitive Basic Bitch...", author: "Stassi Schroeder", price: "$4.72", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Rural Diaries: Love, Livestock, and Big Life...", author: "Hilarie Burton", price: "$14.82", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Mafia: Inside the Billionaires' Club", author: "Pieter du Toit", price: "$29.95 - $59.95", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Think Like a Monk: Train Your Mind for Peace and Purpose", author: "Anna Burns", price: "$56.00", imgSrc: "/Vanisher.jpg" }
    ],
    science: [
        { format: "Hardcover", title: "Brief Answers to the Big Questions", author: "Stephen Hawking", price: "$15.99", imgSrc: "/img/science1.jpg" },
        { format: "Paperback", title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", price: "$18.95", imgSrc: "/img/science2.jpg" },
        { format: "Hardcover", title: "The Body: A Guide for Occupants", author: "Bill Bryson", price: "$25.00", imgSrc: "/img/science3.jpg" },
        { format: "Paperback", title: "Why We Sleep", author: "Matthew Walker", price: "$17.00", imgSrc: "/img/science4.jpg" },
        { format:"Hardcover", title: "Next Level Basic: The Definitive Basic Bitch...", author: "Stassi Schroeder", price: "$4.72", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Rural Diaries: Love, Livestock, and Big Life...", author: "Hilarie Burton", price: "$14.82", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Stellenbosch: Inside the Billionaires' Club", author: "Pieter du Toit", price: "$29.95 - $59.95", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Think Like a Monk: Train Your Mind for Peace and Purpose", author: "Anna Burns", price: "$56.00", imgSrc: "/Vanisher.jpg" }
    ],
    romance: [
        { format: "Hardcover", title: "The Notebook", author: "Nicholas Sparks", price: "$8.99", imgSrc: "/img/romance1.jpg" },
        { format: "Paperback", title: "Pride and Prejudice", author: "Jane Austen", price: "$9.49", imgSrc: "/img/romance2.jpg" },
        { format: "Hardcover", title: "Outlander", author: "Diana Gabaldon", price: "$9.99", imgSrc: "/img/romance3.jpg" },
        { format: "Paperback", title: "Me Before You", author: "Jojo Moyes", price: "$10.99", imgSrc: "/img/romance4.jpg" },
        { format:"Hardcover", title: "Next Level Basic: The Definitive Basic Bitch...", author: "Stassi Schroeder", price: "$4.72", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Rural Diaries: Love, Livestock, and Big Life...", author: "Hilarie Burton", price: "$14.82", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Stellenbosch: Inside the Billionaires' Club", author: "Pieter du Toit", price: "$29.95 - $59.95", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Think Like a Monk: Train Your Mind for Peace and Purpose", author: "Anna Burns", price: "$56.00", imgSrc: "/Vanisher.jpg" }
    ],
    travel: [
        { format: "Paperback", title: "In Patagonia", author: "Bruce Chatwin", price: "$12.49", imgSrc: "/img/travel1.jpg" },
        { format: "Hardcover", title: "Vagabonding", author: "Rolf Potts", price: "$14.00", imgSrc: "/img/travel2.jpg" },
        { format: "Paperback", title: "A Walk in the Woods", author: "Bill Bryson", price: "$7.99", imgSrc: "/img/travel3.jpg" },
        { format: "Hardcover", title: "The Geography of Bliss", author: "Eric Weiner", price: "$11.99", imgSrc: "/img/travel4.jpg" },
        { format:"Hardcover", title: "Next Level Basic: The Definitive Basic Bitch...", author: "Stassi Schroeder", price: "$4.72", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Rural Diaries: Love, Livestock, and Big Life...", author: "Hilarie Burton", price: "$14.82", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "The Stellenbosch: Inside the Billionaires' Club", author: "Pieter du Toit", price: "$29.95 - $59.95", imgSrc: "/Vanisher.jpg" },
        { format:"Hardcover", title: "Think Like a Monk: Train Your Mind for Peace and Purpose", author: "Anna Burns", price: "$56.00", imgSrc: "/Vanisher.jpg" }
    ]
};

export const NewReleases = () => {
    const [key, setKey] = useState('history');
    const [hoveredIdx, setHoveredIdx] = useState(null); // To track the hovered card

     // Function to truncate text
     const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) +'...';
        }
        return text;
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-between align-items-center mb-3">
                <Col md="auto">
                    <h2>New Releases</h2>
                </Col>
                <Col>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="justify-content-end"
                    >
                        <Tab eventKey="history" title="History" />
                        <Tab eventKey="science" title="Science" />
                        <Tab eventKey="romance" title="Romance" />
                        <Tab eventKey="travel" title="Travel" />
                    </Tabs>
                </Col>
            </Row>
            <Row>   
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="/BannerSale.png" style={{ height: '755px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title className='text-danger'> <h1>Get Extra Sale -25%</h1></Card.Title>
                            <Card.Text><h4>ON ORDER OVER $100</h4></Card.Text>
                            <Button variant="danger">View More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Row>
                        {booksData[key].map((book, idx) => (
                            <Col sm={6} md={3} key={idx}>
                                <Card 
                                    className="mb-4" 
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    style={{
                                        height: '475px', // Fixing card height
                                        overflow: 'hidden' // Ensures content transitions don't overflow
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: hoveredIdx === idx ? '-10%' : '0', // Moves content up on hover
                                        width: '100%',
                                        transition: 'top 0.3s ease', // Smooth transition
                                    }}>
                                        <Card.Img variant="top" src={book.imgSrc} style={{ height: '250px', objectFit: 'cover' }} />
                                        <Card.Body>
                                            <Card.Title>{truncateText(book.title, 27)}</Card.Title>
                                            <Card.Text>{book.author}</Card.Text>
                                            <Card.Text><strong>{book.price}</strong></Card.Text>
                                            <Card.Text className='text-danger'>{book.format}</Card.Text>
                                        </Card.Body>
                                    </div>
                                    {hoveredIdx === idx && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            width: '100%',
                                            backgroundColor: 'white',
                                            textAlign: 'center',
                                            padding: '10px 0'
                                        }}>
                                            <Button variant="primary" size="sm">Add to Cart</Button>
                                            <span style={{ marginLeft: '10px', color: 'red', fontSize: '1.5rem' }}>♥</span>
                                        </div>
                                    )}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default NewReleases;