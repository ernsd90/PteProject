import React, { useState  } from 'react';
import { useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import RegistrationPage from './RegistrationPage.jsx';
import { ApiUrl } from '../../config';
import { Auth } from "../../utils/AuthContext.jsx"
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useContext(Auth)

   
    const navigate = useNavigate();


    const loginSubmit = async (event) => {
        event.preventDefault();
 
        const logindata =  { 
            user_email: email,
            user_password: password
        };

        const response = await fetch(ApiUrl+'login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
          },
            body: JSON.stringify(logindata),
          });
      
        const data = await response.json();
        if (data.message === true) {
            const userData = data.userData;
            login(userData.token, userData.username,userData.first_name,userData.last_name, userData.user_role);

            toast.success('Login Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
            if (userData.user_role === "Student") {
                navigate('/student-dashboard');
            } else {
                navigate('/student-profile');
            }
        } else {
            // Handle login failure
            console.error('Login faileds:', data.message);
            // Handle login failure
            toast.error('Login failed: ' + data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };



    return (
        <MainLayout>
            <ToastContainer />
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                   
                    <div className="row gy-5 row--30">
                    <div className="col-lg-6">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                        <h3 className="title">Login</h3>
                        <form className="max-width-auto"  onSubmit={loginSubmit}>
                            <div className="form-group">
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Username or email *</label>
                                <span className="focus-border" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label>Password *</label>
                                <span className="focus-border" />
                            </div>
                            <div className="row mb--30">
                            <div className="col-lg-6">
                                <div className="rbt-lost-password text-end">
                                <a className="rbt-btn-link" href="/">
                                    Lost your password?
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="form-submit-group">
                            <button
                                type="submit"
                                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                            >
                                <span className="icon-reverse-wrapper">
                                <span className="btn-text">Log In</span>
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
                    <RegistrationPage/>
                    </div>
                </div>
            </div>
            


        </MainLayout>
    );
};

export default LoginPage;
