import React from "react";
import { MdCopyright } from "react-icons/md";
import Header from "../Header/Header";
import Home from '../Home/Home';
import Footer from "../Footer/Footer";





const Frame = () => {
  
    return (
      <>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </>
    );
}

export default Frame;
