import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Nav1 from './Nav';
import ClientList from './ClientsList';
const Clients = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/ClientsForm');
  };

  return (
    <div>
    <Nav1 />
    <div className="d-flex flex-column align-items-center">
      <h2>Clients</h2>
      <ClientList />
      <Button variant="info" onClick={handleNavigation}>
        Add new Client
      </Button>
    </div>
    </div>
  );
};

export default Clients;

