import React from "react";
import { Link } from "react-router-dom";


const Header  = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservations"><button aria-label="On Click">Reserve a Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src="../img/chefB.png" alt="Logo"/>
                </div>
            </section>
        </header>
    );
}

export default Header;