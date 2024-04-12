import React, { useRef, useState } from 'react';
import Nav1 from './Nav';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
export default function ClientsForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const [isUnderage, setIsUnderage] = useState(false); // State for age validation

    const ref = collection(firestore, 'Clients');

    const handleSave = async (e) => {
        e.preventDefault();

        const ageValue = parseInt(ageRef.current.value, 10); // Parse age as an integer

        if (ageValue < 18) {
            setIsUnderage(true); // Set state to indicate underage
            return; // Do not submit if underage
        }

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            age: ageValue,
        };

        try {
            await addDoc(ref, data);
            console.log('Data saved successfully!');
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
                        <input type="text" className="form-control" id="name" ref={nameRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Enter Email</label>
                        <input type="email" className="form-control" id="email" ref={emailRef} />
                    </div>
                    <div className={`mb-3 ${isUnderage ? 'has-danger' : ''}`}>
                        <label htmlFor="age" className="form-label">Enter Age</label>
                        <input type="number" className={`form-control ${isUnderage ? 'is-invalid' : ''}`} id="age" ref={ageRef} />
                        {isUnderage && <div className="invalid-feedback">Age must be 18 or older.</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );
}
