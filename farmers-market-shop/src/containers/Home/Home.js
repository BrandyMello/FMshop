import React from "react";
import VideoCover from '../../assets/fmsHomeImg.jpg';
import '../Home/Home.scss';

const Home = () => {
  return (
      <section className="home">
        <img src={VideoCover} alt="" className="video-cover" />
      </section> 
  );
}

export default Home;