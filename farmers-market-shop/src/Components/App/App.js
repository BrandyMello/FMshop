import React, { Component } from 'react';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import StateMarkets from "../StateMarkets/StateMarkets";


class App extends Component {
  constructor(selectedState, zipcode) {
    super(selectedState, zipcode);
    this.state = {
      selectedState: this.selectedState,
      zipcode: this.zipcode,
      locationSubmitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.setState({ locationSubmitted: !this.state.locationSubmitted });
    console.log(this.state);
  }

  render() {

    console.log(this.state);
    return (
      <>
        <Header />
        <main>
          {!this.state.locationSubmitted && <Home 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            selectedState={this.state.selectedState}
            zipcode={this.state.zipcode}
          />}
          {this.state.locationSubmitted && <StateMarkets 
          selectedState={this.state.selectedState}
          />}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
