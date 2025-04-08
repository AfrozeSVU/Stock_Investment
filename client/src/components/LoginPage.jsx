 import React, { useState } from 'react';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        if (!validate()) {
            toast.error("Please correct the errors.");
            return;
        }

        try {
            const userData = await loginUser({ email, password });

            if (userData.token) {
                localStorage.setItem("token", userData.token);
            }
            localStorage.setItem("user", JSON.stringify(userData));

            toast.success("Login Successful! Redirecting to Home...", { autoClose: 2000 });

            setTimeout(() => {
                navigate("/");
            }, 2500);
        } catch (err) {
            toast.error("Invalid credentials, please try again.");
            setErrors({ form: "Invalid credentials, please try again." });
        }
    };

    return (
        <div className="login-bg-image">
            <div className="login-container">
                <ToastContainer position="top-right" autoClose={3000} />
                <div className="logo-container">
                    {/* <img src="logo.png" alt="FinSight Logo" className="logo" /> */}
                    <span className="app-name">StockView</span>
                </div>
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <img src="/email.png" alt="Email Icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <div className="input-group">
                        <img src="/lock.png" alt="Lock Icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && <p className="error-text">{errors.password}</p>}

                    <button type="submit" className="login-btn">Login</button>
                </form>

                {errors.form && <p className="error-text">{errors.form}</p>}

                <p className="register-text">Don’t have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
