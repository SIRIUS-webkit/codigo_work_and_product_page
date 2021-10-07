import React, { useRef, useState, useEffect } from "react";
import { TimelineLite, Power2 } from "gsap";
// import logo from "../img/logo-codigo.png";
function Navbar() {
  const [toggle, setToggle] = useState(true);
  let logoimg = useRef(null);
  let nav = useRef(null);
  let link1 = useRef(null);
  let textreveal1 = useRef(null);
  let textreveal2 = useRef(null);
  let textreveal3 = useRef(null);
  let textreveal4 = useRef(null);
  let textreveal5 = useRef(null);
  let textreveal6 = useRef(null);
  let textreveal7 = useRef(null);
  const t1 = new TimelineLite();
  const t2 = new TimelineLite();

  useEffect(() => {
    t1.from(
      link1.current,
      0.5,
      { y: -30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    ).from(
      logoimg.current,
      0.5,
      { y: -30, opacity: 0, ease: Power2.easeInOut },
      ".5"
    );
  }, []);
  function handlerChange() {
    t1.kill();
    setToggle(!toggle);
    t2.from(
      textreveal1.current,
      0.8,
      { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
      0.1
    )
      .from(
        textreveal2.current,
        0.8,
        { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
        0.1
      )
      .from(
        textreveal3.current,
        0.8,
        { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
        0.1
      )
      .from(
        textreveal4.current,
        0.8,
        { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
        0.1
      )
      .from(
        textreveal5.current,
        0.8,
        { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
        0.1
      )
      .from(
        textreveal6.current,
        0.8,
        { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
        0.1
      )
      .from(
        textreveal7.current,
        0.8,
        { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
        0.1
      );
  }

  return (
    <div className="nav-header">
      <nav>
        <a className="logo" href="#home">
          <img
            src="https://www.codigo.co/img/ui/logo-codigo-red.svg"
            alt="codigo"
            ref={logoimg}
          />
        </a>
        <button
          type="button"
          className={toggle ? "nav-toggler" : "nav-toggler active"}
          ref={nav}
          onClick={handlerChange}
        >
          <span></span>
        </button>
        <ul className={toggle ? "nav-links" : "nav-links active"} ref={link1}>
          <li ref={textreveal1}>
            <a href="#home" className="font-bold f">
              <span>Work</span>
            </a>
          </li>
          <li ref={textreveal2}>
            <a href="#about" className="s">
              Solutions
            </a>
          </li>
          <li ref={textreveal3}>
            <a href="#service" className="t">
              Services
            </a>
          </li>
          <li ref={textreveal4}>
            <a href="#portfolio" className="fo">
              About us
            </a>
          </li>
          <li ref={textreveal5}>
            <a href="#experience" className="fi">
              Blog
            </a>
          </li>
          <li ref={textreveal6}>
            <button className="request-btn">Request a quote</button>
          </li>
          <li ref={textreveal7}>
            <a href="#let" className="hidden-link">
              Let's chat
            </a>
          </li>
          <li>
            <div className="navbar-social-link">
              <a href="#" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-facebook-white.svg"
                  alt=""
                />
              </a>
              <a href="" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-twitter-white.svg"
                  alt=""
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-instagram-white.svg"
                  alt=""
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://www.codigo.co/img/icons/social-linkedIn-white.svg"
                  alt=""
                />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
