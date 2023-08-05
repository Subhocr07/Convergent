import React from "react";
import { Route, Link } from "react-router-dom";
import { isAuthenticated } from "../helper/isAuthenticated";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Link to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
