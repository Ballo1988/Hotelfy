import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import {collection, getDocs} from 'firebase/firestore'
import ClientItem from './ClientItem';

export default function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = collection(firestore, 'Clients');
                const snapshot = await getDocs(colRef);
                const clientData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setClients(clientData);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Clients List</h2>
            <div className="row">
                {clients.map(client => (
                    <ClientItem key={client.id} client={client} />
                ))}
            </div>
        </div>
    );
}