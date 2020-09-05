import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";
import formatNumber from "utils/formatNumber";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(1),
          endDate: new Date(1),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.jml_order !== data.jml_order) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.jml_order - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            // endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    var minDate = new Date();

    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card bordered booking-form">
        <h4 className="mb-3">Pesan Sekarang</h4>

        <label htmlFor="jml_order">Ingin tambah porsinya?</label>
        <InputNumber
          min={this.min_order}
          max={100}
          suffix={" porsi"}
          onChange={this.updateData}
          name="jml_order"
          value={data.jml_order}
        />
        

        <label htmlFor="date">Untuk Kapan ?</label>
        <InputDate
          onChange={this.updateData}
          name="date"
          value={data.date}
          minDate={minDate.addDays(1)}
        />
        <span className="text-gray-400 mb-3" style={{ marginTop: -15 }}>
          <small>Min. Pesanan untuk besok</small>
        </span>

        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          Total Bayar{" "}
          <span className="text-gray-900">
            Rp.{" "}
            {formatNumber( data.jml_order * data.duration)}
          </span>{" "}
          untuk{" "}
          <span className="text-gray-900">
            {data.jml_order} selama {data.duration} hari
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Lanjutkan Pesanan
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {

  startBooking: propTypes,
};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export default withRouter(BookingForm);
