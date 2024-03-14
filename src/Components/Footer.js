import React from 'react';
import logo from '../Assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt='logo'></img>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/booking'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>About Us</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacts</h3>
                <ul>
                    <li>Address: <br/>456 Saltcity, USA</li>
                    <li>Phone: <br/>++0123 456 789</li>
                    <li>Email: <br/>little@lemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Credits</h3>
                <ul>
                    <li>Made by Pratham Goyal</li>
                    <a href='https://www.linkedin.com/in/thepratham05/'>Contact me on Linkedin</a>
                </ul>
            </div>
        </section>
    </footer>
  )
};

export default Footer;