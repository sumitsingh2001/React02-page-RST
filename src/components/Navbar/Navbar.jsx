import React from 'react';
import { images } from '../../constants';
// second way to immport images from files..........++
// import images from '../../constants/images';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {

  // THIS WAY CALLING USESTATE CAN SAVE YOUR TIME TO CALL IT FROMM IMPORT ABOVE....
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.gericht} alt='Navbar-logo' />
        </div>

        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contacts'>Contact</a></li>
        </ul>

        <div className="app__navbar-login">
          <a href="#login" className='p__opensans'>Log in / Registration</a>
          <div />
          <a href="/" className='p__opensans'> Book Table</a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />

              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href='#home' onClick={() => setToggleMenu(false)} >Home</a></li>
                <li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)} >About</a></li>
                <li className='p__opensans'><a href='#menu' onClick={() => setToggleMenu(false)} >Menu</a></li>
                <li className='p__opensans'><a href='#awards' onClick={() => setToggleMenu(false)} >Awards</a></li>
                <li className='p__opensans'><a href='#contacts' onClick={() => setToggleMenu(false)} >Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
