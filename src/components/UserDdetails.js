import axios from "axios";
import { useState } from "react";

const UserDetails = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handlePlaceOrder = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!firstName || !lastName || !address) {
            setError('Please provide first name, last name, and address.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/orders', {
                firstName,
                lastName,
                address,
                cartItems: [] ,
                
            });

            alert("placed order Successfuly")
            setSuccessMessage(response.data.message);
            setFirstName('');
            setLastName('');
            setAddress('');
            setError('');
        } catch (error) {
            setError('Error placing order. Please try again later.');
        }
    };

    return (
        <div className="container mt-5 px-5 pt-5">
            <h2>Place Order Form</h2>
            <form onSubmit={handlePlaceOrder}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control" id="exampleInputfirstname" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputlastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea type="text" className="form-control" id="exampleInputaddress" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="btn btn-primary" name="create">Place Order</button>
            </form>
            { successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    )
}

export default UserDetails;
