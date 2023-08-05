import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const RegistrationForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()


    const handleRegistration = async (userData) => {
        try {
            const requestObject = {
                jsonrpc: "2.0",
                method: "registerUser", // Replace this with the actual method name for user registration as per API documentation
                params: {
                    // Assuming the API expects named parameters (object) instead of an array
                    name: userData.fullName,
                    phone: userData.mobileNumber,
                    email: userData.email,
                    password: userData.password,
                    password_confirmation: userData.confirmPassword
                },
                id: 1, // Any unique identifier to track the request (can be any number or string)
            };

            const response = await axios.post(
                "https://phpwebdevelopmentservices.com/project-react-backend/api/register",
                requestObject
            );

            console.log(response.data); // This should log the response from the API
            if (response.data.error) {
                const errorMessages = Object.values(response.data.error).flat();
                window.alert(errorMessages.join("\n"));

                return;
            }

            // Handle the success response here
            // Redirect to the login page
            navigate("/signin");
        } catch (error) {
            console.error("Error occurred while submitting the form:", error);
            // Handle the error here
            // Show an error message to the user
            alert(error.flat())
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!isValidFullName(fullName)) {
            alert("Please enter a valid full name.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidMobileNumber(mobileNumber)) {
            alert("Please enter a valid mobile number.");
            return;
        }

        if (!isValidPassword(password)) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        const userData = {
            fullName,
            email,
            mobileNumber,
            password,
            confirmPassword
        };
        handleRegistration(userData);

    };
    const isValidFullName = (fullName) => {
        // Basic validation for full name: Should not be empty
        return fullName.trim() !== "";
    };

    const isValidEmail = (email) => {
        // Basic validation for email address using regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const isValidMobileNumber = (mobileNumber) => {
        // Basic validation for mobile number: Should be a 10-digit number
        return /^\d{10}$/.test(mobileNumber);
    };

    const isValidPassword = (password) => {
        // Basic validation for password: Minimum length of 6 characters
        return password.length >= 6;
    };

    console.log()

    return (
        <div className="search_main_section">
            <div className="container">
                <div className="row res_padd">
                    <div className="main-center-div">
                        <div className="top-border-div">
                            <div className="login-from-area">
                                <h2>Create Account</h2>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            className="login-type"
                                            placeholder="Full name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="login-type"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="login-type"
                                            placeholder="Mobile number"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            required
                                        />
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="password-in">
                                        <input
                                            id="password-field"
                                            type="password"
                                            className="login-type"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <div className="clearfix"></div>
                                        <span
                                            toggle="#password-field"
                                            className="field-icon fa fa-fw fa-eye toggle-password"
                                        ></span>
                                    </div>
                                    <div className="password-in">
                                        <input
                                            id="confirm-password-field"
                                            type="password"
                                            className="login-type"
                                            name="confirm-password"
                                            placeholder="Confirm password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                        <div className="clearfix"></div>
                                        <span
                                            toggle="#confirm-password-field"
                                            className="field-icon fa fa-fw fa-eye toggle-password"
                                        ></span>
                                    </div>
                                    <p>
                                        By clicking Sign Up or continue with Facebook or Google, you agree to all{" "}
                                        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                                    </p>
                                    <button type="submit" className="login-submit">
                                        Sign up
                                    </button>
                                </form>
                            </div>
                            <div className="or-area">
                                <span>Or Continue with</span>
                            </div>
                            <div className="login-socials-area">
                                <div className="socials-btns">
                                    <a href="#" className="common-btns facebook-btn">
                                        <img src="images/login-facebook.png" alt="Facebook" /> Facebook
                                    </a>
                                    <a href="#" className="common-btns google-btn">
                                        <img src="images/login-google.png" alt="Google" /> Google
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-account-div">
                            <p>
                                Already have an account? <Link to="/signin">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
