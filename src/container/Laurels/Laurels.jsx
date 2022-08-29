import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <>
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awars & Recognition" />
        <h1 className="headtext__cormorant"> Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award, index) => {

            let Subtitle = award.subtitle; /*Second way to make it more easier to understand....  */
            return (
              <AwardCard
                title={award.title}
                subtitle={Subtitle}
                imgUrl={award.imgUrl}
                key={award.title + index} />
            )
          })}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  </>
);

export default Laurels;


const AwardCard = ({ imgUrl, title, subtitle }) => {
  return (
    <>
      <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="" />

        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
          <p className="p__opensans">{subtitle}</p>
        </div>
      </div>
    </>
  )
}