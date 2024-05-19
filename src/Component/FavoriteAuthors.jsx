import { Container, Carousel, Row, Col, Image } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const authors = [
    { name: 'Anna Banks', books: 6, img: '/Anna Banks.jpg' },
    { name: 'Anna Burns', books: 2, img: '/Anna Burns.jpg' },
    { name: 'Ashlee Vance', books: 2, img: '/Ashlee Vance.jpg' },
    { name: 'Barbara O\'Neal', books: 1, img: '/Barbara O_Neal.jpg' },
    { name: 'Blake Crouch', books: 1, img: '/Blake Crouch.jpg' },
    { name: 'Boo Walker', books: 2, img: '/Boo Walker.jpg' },
    { name: 'A G Riddle', books: 1, img: '/A G Riddle.jpg' },
    { name: 'Andre Aciman', books: 1, img: '/Andre Aciman.jpg' },
    // Add more authors if needed
];

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const carouselControlStyles = {
    color: 'black',
    fontSize: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
    padding: '10px',
    margin: 'auto 0',
};

export const FavoriteAuthors = () => {
    const authorChunks = chunkArray(authors, 5);

    return (
        <Container>
            <h2 className="text-center my-4">Favorite Authors</h2>
            <Carousel
                indicators={true}
                nextIcon={<FaChevronRight style={carouselControlStyles} />}
                prevIcon={<FaChevronLeft style={carouselControlStyles} />}
            >
                {authorChunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <Row className="justify-content-center">
                            {chunk.map((author, idx) => (
                                <Col xs={12} sm={6} md={4} lg={2} className="text-center mb-4" key={idx}>
                                    <Image
                                        src={author.img}
                                        roundedCircle
                                        className="mb-3"
                                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                    />
                                    <h5>{author.name}</h5>
                                    <p>{author.books} Published Books</p>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};
