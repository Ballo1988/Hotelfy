import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ClientModal({ client, show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{client.name}'s Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Email:</strong> {client.email}</p>
                <p><strong>Age:</strong> {client.age}</p>
                {/* Add more client details here if needed */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ClientModal;
