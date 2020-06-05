import React, { Component } from 'react';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";


class App extends Component {
  

  render() {
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
}

export default App;
