import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Automatically redirect to the homepage after 3 seconds
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="not-found">
            <h2 className="not-found__title">Page Not Found</h2>
            <p className="not-found__message">Redirecting to the homepage in 3 seconds...</p>
        </div>
    );
};

export default NotFound;
