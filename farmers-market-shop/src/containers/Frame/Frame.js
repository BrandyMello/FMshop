import React from "react";
import Logo from "../../assets/FarmersMarketShopLogo-Beet1.jpeg";
import "./Frame.scss";
import '../App/App.scss';
import { GoSearch } from "react-icons/go";



const Frame = () => {
  
    return (
      <>
        <header>
          <img src={ Logo } alt='' className='logo'/>
          <h1>Farmers' Market Shop</h1>
          <form>
            <input type='text' className='search'/>
            <GoSearch className='searchIcon'/>
          </form>
        </header>
        <nav>
          <h3>Wholesale</h3>
          <h3>Shop</h3>
          <h3>Farm Login</h3>
        </nav>
      </>
    );
}

export default Frame;
