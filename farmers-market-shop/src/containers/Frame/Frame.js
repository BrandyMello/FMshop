import React from "react";
import Logo from "../../assets/FarmersMarketShopLogo-Beet1.jpeg";
// import "./Frame.scss";
import Home from '../Home/Home';
import { GoSearch } from "react-icons/go";
import { MdCopyright } from 'react-icons/md';



const Frame = () => {
  
    return (
      <>
        <header>
          <img src={Logo} alt="logo" className="logo" />
          <div className="element" id="element"></div>
          <form>
            <input type="text" className="search" />
            <GoSearch className="searchIcon" />
          </form>
          <h1>Farmers' Market Shop</h1>
        </header>
        <nav>
          <h3>Wholesale</h3>
          <h3>Shop</h3>
          <h3>Farm Login</h3>
        </nav>
        <main>
          <Home />
        </main>
        <footer>
          <p>
            <MdCopyright />
            VelvetPlaidProductions
          </p>
        </footer>
      </>
    );
}

export default Frame;
