import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/Groceries-amico.jpg";
import IconMenu from "assets/images/icons/catering.svg";
import IconPelanggan from "assets/images/icons/restaurant.svg";
import IconTreasure from "assets/images/icons/camera.svg";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPick() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showMostPickSmall() {
    window.scrollTo({
      top: props.refMostPickedSmall.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
    <>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Sebuah Platform <br />
              Menu Kuliner
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Kami Menyediakan Menu Kuliner untuk membantu Anda 
              Dalam memilih Kuliner untuk Keperluan keluarga ataupun Acara 
            </p>
                <Button
                  className="btn px-5"
                  hasShadow
                  isPrimary
                  onClick={showMostPick}
                >
                  Lihat Kuliner
                </Button>
              </div>
            <Fade right delay={300}>
              <div className="d-none d-lg-block  bg-header">
                <img
                  src={ImageHero}
                  alt="image resto"
                  className="img-fluid"
                  style={{ height: 500 }}
                />
              </div>
            </Fade>
          </div>
      </section>
    </>
    </Fade>
  );
  }
