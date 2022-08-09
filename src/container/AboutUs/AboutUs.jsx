import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <>
    <div className="app__aboutus app__bg flex__center section__padding" id='about'>

      <div className="app__aboutus-overlay flex-center">
        <img src={images.G} alt="G-overlay" />
      </div>

      <div className="app__aboutus-content flex__center">

        <div className="app__aboutus-content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="spoon-img" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt in deserunt consequuntur soluta reprehenderit deleniti ratione atque
            inventore ipsum est?
          </p>
          <button className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="spoon-img" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt in deserunt consequuntur soluta reprehenderit deleniti ratione atque
            inventore ipsum est?
          </p>
          <button className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
