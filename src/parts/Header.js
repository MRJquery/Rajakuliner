import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Raja<span className="text-gray-900">Kuliner.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="d-none d-lg-block">
              <BrandIcon />
            </div>

            <div className="d-block d-lg-none">
              <BrandIcon />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-cateringkita"
              aria-controls="navbar-cateringkita"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderRadius: 5, color: "red" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-cateringkita">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${getNavLinkClass("/home")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/kategori")}`}>
                  <Button className="nav-link" type="link" href="/kategori">
                    Kategori
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("/testimoni")}`}>
                  <Button className="nav-link" type="link" href="/testimoni">
                    Testimoni
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkClass("pelanggan/")}`}>
                  <Button className="nav-link" type="link" href="/pelanggan">
                    Pelanggan
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fade>
  );
}
