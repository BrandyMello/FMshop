import React, { Component } from "react";
import VideoCover from '../../assets/fmsHomeImg.jpg';

  const Home = ({handleChange, handleSubmit, selectedState, zipcode}) => {
    
    return (
      <section className="home">
        <p className="home__text">
          Welcome to your online shop for local farmers’ markets! Does the farm
          you shop deliver? Can you preorder online and pickup at the your local
          market to avoid crowds. Let’s find out!
        </p>
        <img
          src={VideoCover}
          alt="How it works video"
          className="home__video-cover"
        />
        <form className="home__form">
          <p className="home__form--text">Let's go to the market!</p>
          <select
            name="selectedState"
            id="states"
            className="home__form--dropdown u-sytle-input u-dropdown-style"
            selected="selected"
            value={selectedState}
            onChange={handleChange}
          >
            <option value="">State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District Of Columbia">District Of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
          <input
            name="zipcode"
            type="text"
            placeholder=" 80210"
            className="home__form--input u-sytle-input"
            value={zipcode}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="home__form--btn"
            onClick={handleSubmit}
          >
            GO!
          </button>
        </form>
      </section>
    );
  
}

export default Home;