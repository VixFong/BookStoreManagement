import React, { useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LoginModal = ({ show, handleClose }) => {
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show]);

    const modalRightStyle = {
        position: 'fixed',
        right: 0,
        top: 0,
        margin: 0,
        width: '30%', 
        height: '100%',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1050,
        backgroundColor: '#fff',
        borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
        padding: '20px'
    };

    const modalContentStyle = {
        height: '100%',
        border: 0,
        borderRadius: 0,
    };

    const headerStyle = {
        borderBottom: 'none',
        marginBottom: '20px'
    };

    const formGroupStyle = {
        marginBottom: '15px'
    };

    return (
        <div style={{ ...modalRightStyle, transform: show ? 'translateX(0)' : 'translateX(100%)' }} ref={modalRef}>
            <div style={modalContentStyle}>
                <div style={headerStyle}>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    <h4 className="modal-title" id="login-modal" style={{ fontWeight: 'bold' }}>Account</h4>
                </div>
                <Form>
                    <Form.Group controlId="formBasicEmail" style={formGroupStyle}>
                        <Form.Label>Username or email *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={formGroupStyle}>
                        <Form.Label>Password *</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" style={formGroupStyle}>
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="d-flex justify-content-between mb-3">
                        <Button variant="link" className="p-0">Forgot Password?</Button>
                        <Button variant="link" className="p-0"><Link to="/registerd">Register</Link></Button>
                    </div>
                    <Button variant="dark" type="submit" className="w-100">Sign In</Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginModal;