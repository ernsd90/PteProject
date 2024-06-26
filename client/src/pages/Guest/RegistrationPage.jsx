import React, { useState  } from 'react';
import { ApiUrl } from '../../config';
import { Toast, ToastContainer } from 'react-bootstrap';



const RegisterPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false); // State for toast visibility
    const [toastMessage, setToastMessage] = useState(''); // State for toast message
   

    const registerSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(ApiUrl+'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username,
                user_email: email,
                user_password: password,
            }),
        });
        const data = await response.json();
        console.log(data);  // Handle the response
    };



    return (
  
            <div className="col-lg-6">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                        <h3 className="title">Register</h3>
                        <form className="max-width-auto" onSubmit={registerSubmit}>
                            <div className="form-group">
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <label>First Name *</label>
                                <span className="focus-border" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                <label>Last Name *</label>
                                <span className="focus-border" />
                            </div>
                            <div className="form-group">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label>Email address *</label>
                                <span className="focus-border" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                <label>Username *</label>
                                <span className="focus-border" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <label>Password *</label>
                                <span className="focus-border" />
                            </div>
                           
                            <div className="form-submit-group">
                            <button
                                type="submit"
                                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                            >
                                <span className="icon-reverse-wrapper">
                                <span className="btn-text">Register</span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                </span>
                                </span>
                            </button>
                            </div>
                        </form>
                        </div>
            </div>
     
    );
};

export default RegisterPage;
