import React, { useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {

  const [playVideo, setplayVideo] = React.useState(false);
  const videoRef = React.useRef();/* TO get the reference of video, it'll allow us to et all the information about video/ */

  const handleVideo = () => {
    /* Like this You can get the value of video is playing or not 
      SetplayVideo is here only working for true and false here...
    */
    setplayVideo((prevPlayVideo => !prevPlayVideo))

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  return (
    <>
      <div className="app__video">
        <video
          src={meal}
          controls={false}
          ref={videoRef}
          muted
          loop
          typeof='video/mp4'
        />

        <div className="app__video-overlay flex__center">
          <div className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {playVideo
              ? (/* IF video is in playing form then close it by using this  */
                <BsPauseFill color='fff' fontSize={30} />)
              : (/* AND if video is in not is action then click this button to play it/ */
                <BsFillPlayFill color='fff' fontSize={30} />
              )
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default Intro;
