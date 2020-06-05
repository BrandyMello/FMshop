import React, { Component } from 'react';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";


class App extends Component {
  constructor(selectedState, zipcode) {
    super(selectedState, zipcode);
    this.state = {
      selectedState: this.selectedState,
      zipcode: this.zipcode
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <Home 
            handleChange={this.handleChange}
            selectedState={this.state.selectedState}
            zipcode={this.state.zipcode}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
