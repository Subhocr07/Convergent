import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Z = () => {
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async (loginData) => {
        try {
            const requestObject = {
                jsonrpc: "2.0",
                method: "registerUser", // Replace this with the actual method name for user registration as per API documentation
                params: {
                    // Assuming the API expects named parameters (object) instead of an array
                    email: loginData.email,
                    password: loginData.password,
                },
                id: 1, // Any unique identifier to track the request (can be any number or string)
            };

            const response = await axios.post(
                "https://phpwebdevelopmentservices.com/project-react-backend/api/login",
                requestObject
            );

            console.log(response.data.result.userdata); // This should log the response from the API
            if (response.data.error) {
                const errorMessages = Object.values(response.data.error).flat();
                window.alert(errorMessages.join("\n"));
                return;
            }
            const userDetails = {
                name: response.data.result.userdata.name,
                phone: response.data.result.userdata.phone,
                email: response.data.result.userdata.email
            }
            // localStorage.setItem('userDetails', JSON.stringify(userDetails));
            // console.log(userDetails);
            // Handle the success response here
            // Save the token to localStorage
            const token = response.data.result.token;
            localStorage.setItem('userDetails', JSON.stringify(userDetails)); localStorage.setItem("userToken", token);
            // Window.alert("Logged In")
            alert("Logged In")

            // Now, you can also access the user data from the response and use it as needed
            // const userData = response.data.result.userData;
            // console.log(userData); // This will log the user data object

            // Redirect to the "editprofile" page after successful login
            setTimeout(() => {
                navigate("/");
            }, 0)
        } catch (error) {
            console.error("Error occurred while submitting the form:", error);
            // Handle the error here
            // Show an error message to the user
            window.alert("An error occurred during registration. Please try again.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform any client-side validation here (if needed)

        const userData = {
            email: emailOrMobile,
            password: password,
        };

        handleLogin(userData);
    };

    return (
        <div className="search_main_section">
            <div className="container">
                <div className="row res_padd">
                    <div className="main-center-div">
                        <div className="top-border-div">
                            <div className="login-from-area">
                                <h2>Sign In</h2>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            className="login-type"
                                            placeholder="Email or mobile number"
                                            value={emailOrMobile}
                                            onChange={(e) => setEmailOrMobile(e.target.value)}
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
                                    <div className="remmber-area">
                                        <label className="list_checkBox">
                                            Remember me
                                            <input type="checkbox" name="text" />
                                            <span className="list_checkmark"></span>
                                        </label>
                                        <a className="forgot-passwords" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <button type="submit" className="login-submit">
                                        Sign In
                                    </button>
                                </form>
                            </div>
                            <div className="or-area">
                                <span>Or Continue with</span>
                            </div>
                            <div className="login-socials-area">
                                <div className="socials-btns">
                                    <a href="#" className="common-btns facebook-btn">
                                        <img src="./images/login-facebook.png" alt="" /> Facebook
                                    </a>
                                    <a href="#" className="common-btns google-btn">
                                        <img src="./images/login-google.png" alt="" /> Google
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-account-div">
                            <p>
                                Don't have an account? <Link to="/signup">Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Z;
