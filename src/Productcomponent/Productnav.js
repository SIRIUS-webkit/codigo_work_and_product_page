import React, { useRef, useState, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

function Productnav() {
  const [toggle, setToggle] = useState(true);
  let logotext = useRef(null);
  let nav = useRef(null);
  let link1 = useRef(null);
  let textreveal6 = useRef(null);
  let textreveal7 = useRef(null);
  const t1 = new gsap.timeline();
  const t2 = new gsap.timeline();

  useEffect(() => {
    t1.from(
      link1.current,
      0.7,
      { y: -10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
      ".5"
    ).from(
      logotext.current,
      0.5,
      { y: -10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
      ".6"
    );
  }, []);
  function handlerChange() {
    t1.kill();
    setToggle(!toggle);
    t2.from(
      textreveal6.current,
      0.8,
      { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
      0.1
    ).from(
      textreveal7.current,
      0.8,
      { y: 10, opacity: 0, ease: Power2.easeInOut, stagger: 1 },
      0.1
    );
  }

  return (
    <div className="nav-header">
      <nav>
        <a className="logo" href="#home" ref={logotext}>
          Back to Work
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

export default Productnav;
