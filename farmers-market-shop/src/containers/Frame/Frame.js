import React from "react";
import Logo from "../../assets/FarmersMarketShopLogo-Beet1.jpeg";
import "./Frame.scss";
import '../App/App.scss';



const Frame = () => {
  
    return (
      <header>
        <img src={ Logo } alt='' className='logo'/>
        <h1>Farmers' Market Shop</h1>
        <p>Apparently we had reached a great h</p>
      </header>
    );
}

export default Frame;
