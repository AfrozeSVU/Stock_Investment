 import React, { useState } from 'react';
import '../style/Register.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!user.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!/^[A-Za-z\s]+$/.test(user.name)) {
            newErrors.name = "Name must contain only letters and spaces.";
        } else if (user.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!user.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(user.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!user.password) {
            newErrors.password = "Password is required.";
        } else if (user.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear field error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validate();

        if (!isValid) {
            toast.error("Please fix the errors before submitting.");
            return;
        }

        try {
            await registerUser(user);
            toast.success("Registration Successful! Redirecting to Login...", { autoClose: 2000 });
            setTimeout(() => {
                navigate("/login");
            }, 2500);
        } catch (err) {
            toast.error("Registration failed. Please try again.");
            setErrors({ form: "Registration failed. Please try again." });
        }
    };

    return (
        <div className="register-bg-image">
            <div className="register-container">
                <ToastContainer position="top-right" autoClose={3000} />
                <div className="logo-container">
                    {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
                    <span className="app-name">Stock View</span>
                </div>
                <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <img src="/user.png" alt="User Icon" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.name && <p className="error-text">{errors.name}</p>}

                    <div className="input-group">
                        <img src="/email.png" alt="Email Icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <div className="input-group">
                        <img src="/lock.png" alt="Lock Icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <p className="error-text">{errors.password}</p>}

                    <button type="submit" className="register-btn">Register</button>
                </form>

                {errors.form && <p className="error-text">{errors.form}</p>}

                <p className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;
