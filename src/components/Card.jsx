import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
export default function Cards() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('./Clients');
    };
    return (
        <div className='flex grid-cols-4 space-x-4 my-5 m-10'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1606202598125-e2077bb5ebcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0JTIwbG9iYnl8ZW58MHx8MHx8fDA%3D" />
                <Card.Body>
                    <Card.Title>Overview</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='w-full h-full' variant="top" src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9vbXN8ZW58MHx8MHx8fDA%3D" />
                <Card.Body>
                    <Card.Title>Rooms</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='w-full h-full' variant="top" src="https://images.unsplash.com/photo-1605548109944-9040d0972bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0ZG9vciUyMGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D" />
                <Card.Body>
                    <Card.Title>Activities</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='w-full h-full' variant="top" src="https://plus.unsplash.com/premium_photo-1664475529844-328bdd8d8554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0xJRU5UfGVufDB8fDB8fHww" />
                <Card.Body>
                    <Card.Title>Clients</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleNavigation}>See Clients</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

