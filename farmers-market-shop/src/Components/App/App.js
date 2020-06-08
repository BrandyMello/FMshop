import React, { Component } from 'react';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import StateMarkets from "../StateMarkets/StateMarkets";
import MarketsByZip from "../MarketsByZip/MarketsByZip";


class App extends Component {
  constructor(selectedState, zipcode) {
    super(selectedState, zipcode);
    this.state = {
      selectedState: this.selectedState,
      zipcode: this.zipcode,
      stateSubmitted: false,
      zipSubmitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.zipcode
      ? this.setState({ zipSubmitted: !this.state.zipSubmitted })
      : this.setState({ stateSubmitted: !this.state.stateSubmitted });
  }

  render() {

    console.log(this.state);
    return (
      <>
        <Header />
        <main>
          {!this.state.stateSubmitted && !this.state.zipSubmitted && <Home 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            selectedState={this.state.selectedState}
            zipcode={this.state.zipcode}
          />}
          {this.state.stateSubmitted && <StateMarkets 
            selectedState={this.state.selectedState}
          />}
          {this.state.zipSubmitted && <MarketsByZip 
            zipcode={this.state.zipcode}
          />}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
