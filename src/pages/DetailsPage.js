import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";


import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";


class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

  
  }

  render() {
    const { page, match } = this.props;


    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Menu Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageId} />
        <section className="container" style={{position:"relative", zIndex: 4}}>
          <div className="row">
            <div className="col-7 pr-5 d-none d-lg-block">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5 d-none d-lg-block">
              <Fade bottom>
              <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>


            <div className="col-12 d-block d-lg-none">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-12 d-block d-lg-none">
              <Fade bottom>
              <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={ItemDetails.activityId} />
        {/* <Testimoni data={page[match.params.id].testimonial} /> */}
        <Footer />
      </>
    );
  }
}

export default DetailsPage;