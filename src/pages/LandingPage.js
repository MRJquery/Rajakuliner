import React, { Component } from 'react'

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Footer from "parts/Footer";


import landingPage from "json/landingPage.json";
import { connect } from 'react-redux';
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

    render() {
        console.log(this.props);
    return (
        <>
          <Header {...this.props}></Header>
          <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
          <MostPicked refMostPicked={this.refMostPicked} refMostPickedSmall={this.refMostPickedSmall} data={landingPage.mostPicked} />
          <Categories data={landingPage.category} />
          <Footer />
        </>
      );
    }
  }
  
  
