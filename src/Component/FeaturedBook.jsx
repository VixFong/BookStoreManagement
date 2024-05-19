import React, { useState } from 'react';
import { Carousel, Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const booksData = {
    featured: [
        { title: "All You Can Ever Know: A Memoir", author: "Conn Iggulden", format: "Hardcover, Kindle, Paperback", price: "$29.59 – $59.95", imgSrc: "/AllYouCanItEverKnow.jpg" },
        { title: "Ask Again, Yes: A Novel", author: "Mary Beth Keane", format: "Paperback", price: "$11.51", imgSrc: "/AskAgain.jpg" },
        { title: "Broken Faith: Inside the Word of Faith...", author: "Edward Lee", format: "Paperback", price: "$10.29", imgSrc: "/BrokenFaith.jpg" },
        { title: "Eternity Springs: The McBrides of Texas", author: "Emily March", format: "Paperback", price: "$6.99", imgSrc: "/Eternity.jpg" },
        { title: "Dark In Death", author: "J.D.Robb", format: "Hardcover", price: "$6.99", imgSrc: "/DarkInDeath.jpg" },

    ],
    onSale: [
        { title: "Beaneath a Scarlet Sky", author: "Donna Kauffman", format: "Kindle Edition", price: "$37", imgSrc: "/BeneathAScarletSky.jpg" },
        { title: "City of Girls", author: "Elizabeth Gilbert", format: "Paperback", price: "$12.45", imgSrc: "/CityOfGirl.jpg" },
        { title: "The Silent Patient", author: "Alex Michaelides", format: "Paperback", price: "$7.99", imgSrc: "/SilentPatient.jpg" },
        { title: "Normal People", author: "Sally Rooney", format: "Paperback", price: "$13.99", imgSrc: "/NormalThing.jpg" }
    ],
    mostViewed: [
        { title: "Where the Crawdads Sing", author: "Delia Owens", format: "Hardcover", price: "$15.20", imgSrc: "/CradawlSing.jpg" },
        { title: "Becoming", author: "Michelle Obama", format: "Hardcover", price: "$18.00", imgSrc: "/Becoming.jpg" },
        { title: "Educated", author: "Tara Westover", format: "Paperback", price: "$9.99", imgSrc: "/ThinkLikeAMonk.jpg" },
        { title: "The Vanishing Half", author: "Brit Bennett", format: "Paperback", price: "$14.22", imgSrc: "/Vanisher.jpg" }
    ]
};

export const FeaturedBook = () => {
    const [key, setKey] = useState('featured');

    const arrowStyles = {
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };

    const cardStyle = {
        width: '250px',
        height: '500px',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: 'scale(1)', 
    };

    const hoverStyle = {
        transform: 'scale(1.1)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = hoverStyle.transform;
        e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    };

    const chunkArray = (arr, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const renderBooks = (books) => {
        const bookChunks = chunkArray(books, 4);
        return (
            <Carousel
                indicators={false}
                interval={null}
                nextIcon={<span style={arrowStyles} aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span style={arrowStyles} aria-hidden="true" className="carousel-control-prev-icon" />}
            >
                {bookChunks.map((chunk, idx) => (
                    <Carousel.Item key={idx}>
                        <Row className="justify-content-center">
                            {chunk.map((book, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                    <Card
                                        style={cardStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Card.Img variant="top" src={book.imgSrc} style={{ height: '60%', objectFit: 'cover' }} />
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <Card.Title>{book.title}</Card.Title>
                                            <Card.Text>{book.author}</Card.Text>
                                            <Card.Text className="text-danger">{book.format}</Card.Text>
                                            <Card.Text>{book.price}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    };

    return (
        <Container className="my-5">
            <div className="text-center mb-3">
                <h1>Featured Books</h1>
            </div>
            <Tabs
                id="book-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center"
            >
                <Tab eventKey="featured" title="Featured">
                    {renderBooks(booksData.featured)}
                </Tab>
                <Tab eventKey="onSale" title="On Sale">
                    {renderBooks(booksData.onSale)}
                </Tab>
                <Tab eventKey="mostViewed" title="Most Viewed">
                    {renderBooks(booksData.mostViewed)}
                </Tab>
            </Tabs>
        </Container>
    );
};

export default FeaturedBook;