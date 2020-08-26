import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage"
import Checkout from "pages/Checkout";




import "assets/scss/style.scss";
// import "assets/bootstrap.min.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route path="/checkout" component={Checkout} />

      </Router>

    </div>
  );
}

export default App;
