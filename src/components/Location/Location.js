import React from "react";
import "./Location.scss";
// import  {locationRef}  from '../Navbar/Navbar'

const Location = () => {
  return (
    <div className="container" id="location" >
      <div className="div-location">
        <div>
          <h1 >39 Eleanor St</h1>
          <p>
          Darnall, Sheffield S9 5AX, UK
          </p>
          <a href="">Show in the map</a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2188.445686202828!2d60.722229951462!3d56.73531152315955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c169e7c0543201%3A0x9d012866ed0f6b4b!2z0JXQmtCQ0JQsIDUg0LrQvCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA2MjAwMTA!5e0!3m2!1sru!2s!4v1667652663525!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="div-map"></div>
    </div>
  );
};

export default Location;
