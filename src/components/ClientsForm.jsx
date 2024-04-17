import React, { useState } from 'react';
import Nav1 from './Nav';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function ClientsForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [isUnderage, setIsUnderage] = useState(false);

    const ref = collection(firestore, 'Clients');

    const handleSave = async (e) => {
        e.preventDefault();

        const ageValue = parseInt(age, 10);

        if (ageValue < 18) {
            setIsUnderage(true);
            return;
        }

        const data = {
            name: name,
            email: email,
            age: ageValue,
        };

        try {
            await addDoc(ref, data);
            console.log('Data saved successfully!');
            setName('');
            setEmail('');
            setAge('');
            setIsUnderage(false);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div>
            <Nav1 />
            <div className="container mt-4">
                <form onSubmit={handleSave}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Enter Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={`mb-3 ${isUnderage ? 'has-danger' : ''}`}>
                        <label htmlFor="age" className="form-label">Enter Age</label>
                        <input
                            type="number"
                            className={`form-control ${isUnderage ? 'is-invalid' : ''}`}
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {isUnderage && <div className="invalid-feedback">Age must be 18 or older.</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );
}

