import React, {useState} from "react";
import logo from "../img/Logo.svg";


const Nav = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-bar">
            <a href="/">
                <img src={logo} alt="Logo"/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="navigation-bar"></div>
                <div className="navigation-bar"></div>
                <div className="navigation-bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/menu">MENU</a>
                </li>
                <li>
                    <a href="/reservations">RESERVATIONS</a>
                </li>
                <li>
                    <a href="/order-online">ORDER ONLINE</a>
                </li>
                <li>
                    <a href="/login">LOGIN/ SIGN UP</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;