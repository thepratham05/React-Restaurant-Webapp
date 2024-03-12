import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../Assets/restauranfood.jpg'

const Header = () => {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a
                lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>
            <div className='banner-img'>
              <img src={BannerImg} alt='Food'></img>
            </div>
        </section>
    </header>
  )
};

export default Header;