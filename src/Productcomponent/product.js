import React, { useState, useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Carousel from "./Carousel";

function Product() {
  let producttitle = useRef(null);
  let hidetitle = useRef(null);
  let productdetails = useRef(null);
  let keyfeatures = useRef(null);
  let bigcircle = useRef(null);
  let leftbtn = useRef(null);
  let rightbtn = useRef(null);
  const t1 = new gsap.timeline();

  useEffect(() => {
    t1.from(
      producttitle.current,
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeInOut },
      ".7"
    )
      .from(
        hidetitle.current,
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        ".7"
      )
      .from(
        leftbtn.current,
        0.5,
        { x: -160, opacity: 0, ease: Power2.easeInOut },
        ".1"
      )
      .from(
        rightbtn.current,
        0.5,
        { x: 160, opacity: 0, ease: Power2.easeInOut },
        ".1"
      )
      .from(
        productdetails.current,
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeInOut },
        "1.4"
      )
      .from(
        bigcircle.current,
        0.5,
        { scale: 1, z: 0.001, opacity: 0, ease: Power2.easeInOut },
        "1.4"
      )
      .from(
        keyfeatures.current,
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeIn },
        "1.8"
      );
  }, []);
  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="hide-title" ref={hidetitle}>
            <h1>KIWI Auto Marketplace</h1>
          </div>
          <div className="route-btn left" ref={leftbtn}>
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
          <div className="route-btn right" ref={rightbtn}>
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="product-title" ref={producttitle}>
                <h1>KIWI Auto Marketplace</h1>
              </div>
              <div className="product-details" ref={productdetails}>
                <p>
                  Myanmar newest 2nd hand car buying, bidding and selling
                  marketplace! You can even add an insurance plan when you buy a
                  car and have the platform settle all the mundane paperwork
                  while you sit back and collect your car when it’s ready.
                </p>
              </div>
              <div
                className="key-features d-flex justify-content-between align-items-center"
                ref={keyfeatures}
              >
                <div className="key-title">
                  <p>Key Features</p>
                </div>
                <div className="key-description">
                  <p>Car Inspection with 204 Check Points </p>
                  <p>Real-time Auction Bidding</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-first order-lg-last">
              <div className="big-circle" ref={bigcircle}>
                <Carousel>
                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/KIWI-4@2x.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/KIWI-3@2x.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/KIWI-1@2x.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://cdn.codigo.co/uploads/2021/04/KIWI-2@2x.png"
                      alt=""
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="mobile-btn mobile-left">
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
          <div className="mobile-btn mobile-right">
            <img
              src="https://www.codigo.co/img/ui/arrow-left-white.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
