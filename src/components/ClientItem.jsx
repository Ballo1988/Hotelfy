import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ClientModal from './ClientModal';

function ClientItem({ client }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{client.name}</h5>
                    <p className="card-text">Email: {client.email}</p>
                    <p className="card-text">Age: {client.age}</p>
                    <Button variant="primary" onClick={handleOpenModal}>Details</Button>
                </div>
            </div>
            <ClientModal client={client} show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default ClientItem;
