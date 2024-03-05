import React from "react";
import logo from "../img/Asset.png";

function Footer(){
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo"></img>
                </div>

                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li>About</li>
                        <li>Menu</li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login/ Sign up</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Client Services</h3>
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/Meta-Capstone-Project/faq">FAQ section</a></li>
                        <li><a href="/Meta-Capstone-Project/accessbility">Accessbility</a></li>
                        <li><a href="/Meta-Capstone-Project/social">Social Media</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Hours</h3>
                    <ul>
                        <li>Monday-Thursday: <br/> 10am - 9:30pm</li>
                        <li>Friday-Saturday: <br/> 10am - 10:30pm</li>
                        <li>Sunday: 11:30am - 8:30pm</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;