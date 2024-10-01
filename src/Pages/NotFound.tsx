import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <img src="src/assets/images/not-found.png" alt="Not Found" className="mb-4 w-1/3"/>
            <h1 className="text-2xl font-semibold mb-4">Sorry, the page you are looking for does not exist.</h1>
            <Link to="/" className="btn btn-info w-52 h-16 text-2xl text-gray-700">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
