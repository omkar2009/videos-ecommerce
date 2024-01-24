import React from "react";
import "./HomePage.css"
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className="Home-Page">         
            <h1>Welcome to the truAD</h1>
            <nav>
                <Link to="/">
                    HomePage
                </Link>
                <Link to="/loginform">
                    LoginForm
                </Link>
                <Link to="/videocomponent">
                    VideoComponent
                </Link>
            </nav>
        </div>
    );
};

export default HomePage;