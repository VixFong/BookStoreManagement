import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaPinterestP } from 'react-icons/fa';

export const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#f8f9fa',
            padding: '40px 0'
        },
        heading: {
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '15px'
        },
        text: {
            fontSize: '14px',
            color: '#6c757d',
            marginBottom: '10px'
        },
        link: {
            fontSize: '14px',
            color: '#6c757d',
            textDecoration: 'none'
        },
        linkHover: {
            color: '#007bff'
        },
        icon: {
            fontSize: '20px',
            color: '#6c757d',
            marginRight: '15px'
        },
        iconHover: {
            color: '#007bff'
        },
        listUnstyled: {
            paddingLeft: '0',
            listStyleType: 'none'
        }
    };

    return (
        <footer style={styles.footer}>
            <Container>
                <Row>
                    <Col md={3}>
                        <h5 style={styles.heading}>BOOKSTORE</h5>
                        <p style={styles.text}>55 Trần Đình Xu, Phường Cầu Kho, Quận 1, TP.HCM</p>
                        <p style={styles.text}>sale@bookstore.com</p>
                        <p style={styles.text}>+84 123-321-1234</p>
                        <div className="d-flex">
                            <FaInstagram style={styles.icon} />
                            <FaFacebookF style={styles.icon} />
                            <FaYoutube style={styles.icon} />
                            <FaTwitter style={styles.icon} />
                            <FaPinterestP style={styles.icon} />
                        </div>
                    </Col>
                    <Col md={2}>
                        <h5 style={styles.heading}>Explore</h5>
                        <ul style={styles.listUnstyled}>
                            <li><a href="#" style={styles.link}>About us</a></li>
                            <li><a href="#" style={styles.link}>Sitemap</a></li>
                            <li><a href="#" style={styles.link}>Bookmarks</a></li>
                            <li><a href="#" style={styles.link}>Sign in/Join</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 style={styles.heading}>Customer Service</h5>
                        <ul style={styles.listUnstyled}>
                            <li><a href="#" style={styles.link}>Help Center</a></li>
                            <li><a href="#" style={styles.link}>Returns</a></li>
                            <li><a href="#" style={styles.link}>Product Recalls</a></li>
                            <li><a href="#" style={styles.link}>Accessibility</a></li>
                            <li><a href="#" style={styles.link}>Contact Us</a></li>
                            <li><a href="#" style={styles.link}>Store Pickup</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5 style={styles.heading}>Policy</h5>
                        <ul style={styles.listUnstyled}>
                            <li><a href="#" style={styles.link}>Return Policy</a></li>
                            <li><a href="#" style={styles.link}>Terms Of Use</a></li>
                            <li><a href="#" style={styles.link}>Security</a></li>
                            <li><a href="#" style={styles.link}>Privacy</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5 style={styles.heading}>Categories</h5>
                        <ul style={styles.listUnstyled}>
                            <li><a href="#" style={styles.link}>Action</a></li>
                            <li><a href="#" style={styles.link}>Comedy</a></li>
                            <li><a href="#" style={styles.link}>Drama</a></li>
                            <li><a href="#" style={styles.link}>Horror</a></li>
                            <li><a href="#" style={styles.link}>Kids</a></li>
                            <li><a href="#" style={styles.link}>Romantic Comedy</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;