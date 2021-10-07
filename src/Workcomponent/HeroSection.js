import React, { useEffect, useRef } from "react";
import { TimelineLite, Power2 } from "gsap";
import Navbar from "./Navbar";
function HeroSection() {
  let cont1 = useRef(null);
  let cont2 = useRef(null);
  const t1 = new TimelineLite();

  useEffect(() => {
    t1.from(
      cont1.current,
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    ).from(
      cont2.current,
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    );
  });

  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="row" ref={cont1}>
            <div className="col-lg-12">
              <div className="hero-title">
                <p className="first-title">Here’s 5% of</p>
                <p className="second-title">our published work.</p>
                <p className="third-title">See 100% of our power.</p>
              </div>
            </div>
          </div>
          <div className="row main-grid" ref={cont2}>
            <div className="col-lg-9">
              <div className="dip-flex">
                <div className="first-grid">
                  <ul>
                    <li className="special">
                      <a href="#">
                        <span className="red-line">
                          &nbsp;&nbsp;&nbsp;&nbsp;All
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Transport & Logistics</a>
                    </li>
                    <li>
                      <a href="#">Co-incubation</a>
                    </li>
                    <li>
                      <a href="#">Telco</a>
                    </li>
                  </ul>
                </div>
                <div className="second-grid">
                  <ul>
                    <li>
                      <a href="#">Food & Beverage</a>
                    </li>
                    <li>
                      <a href="#">Backing & Finance</a>
                    </li>
                    <li>
                      <a href="#">Healthcare</a>
                    </li>
                    <li>
                      <a href="#">Others</a>
                    </li>
                  </ul>
                </div>
                <div className="third-grid">
                  <ul>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Retail & Entertainment</a>
                    </li>
                    <li>
                      <a href="#">Start-ups</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="wrapper-box">
                <p className="wrapper-box-title">legend</p>
                <div className="dip-flex small-wrpper-box">
                  <ul>
                    <li className="dip-flex align-items-center">
                      <img
                        src="https://www.codigo.co/img/ui/ico-app.svg"
                        alt="app"
                      />{" "}
                      &nbsp;&nbsp;&nbsp;
                      <span className="warpper-font">APP</span>
                    </li>
                    <li className="dip-flex">
                      <img
                        src="https://www.codigo.co/img/ui/ico-cms.svg"
                        alt="cms"
                      />{" "}
                      &nbsp;&nbsp;&nbsp;
                      <span className="warpper-font">CMS</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="dip-flex">
                      <img
                        src="https://www.codigo.co/img/ui/ico-web.svg"
                        alt="web"
                      />{" "}
                      &nbsp;&nbsp;&nbsp;
                      <span className="warpper-font">WEB</span>
                    </li>
                    <li className="dip-flex">
                      <img
                        src="https://www.codigo.co/img/ui/ico-uiux.svg"
                        alt="ui/ux"
                      />{" "}
                      &nbsp;&nbsp;&nbsp;
                      <span className="warpper-font">UI/UX</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HeroSection;
