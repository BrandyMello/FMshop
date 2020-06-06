import React, { Component } from "react";
import VideoCover from '../../assets/fmsHomeImg.jpg';

  const Home = ({handleChange, selectedState, zipcode}) => {
    
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
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <input
            name="zipcode"
            type="text"
            placeholder=" 80210"
            className="home__form--input u-sytle-input"
            value={zipcode}
            onChange={handleChange}
          />
          <button type="submit" className="home__form--btn">
            GO!
          </button>
        </form>
      </section>
    );
  
}

export default Home;