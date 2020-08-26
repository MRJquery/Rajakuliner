import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <>
      <footer className="container">
        <div className="container">
          <div className="row">
            <div className="col-auto" style={{ width: 350 }}>
              <IconText />
              <p className="brand-tagline">
                Penyedia Menu Kuliner dengan Pemesanan mudah dan simple
              </p>
            </div>
            <div className="col-auto mr-5">
              <h6 className="mt-2">Menu Lain</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Buat Akun
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Pesan Menu
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Pembayaran
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h6 className="mt-2">Hubungi Kami</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    type="link"
                    href="mailto:info@Menukuliner.com"
                  >
                    info@Menukuliner.com
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal type="link" href="tel:+62895332193154">
                    +62895332193154
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Menukuliner, DKI Jakarta</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2020 • All rights reserved • Menukuliner
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
