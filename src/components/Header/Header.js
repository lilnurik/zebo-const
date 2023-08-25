import React from "react";
import "./Header.scss";
import img2 from "../../img/img2.png"
import Navbar from "../Navbar/Navbar";
import Logo from '../../img/Logo.png'
import {BsArrowRight} from 'react-icons/bs'
// import  {homeRef}  from '../Navbar/Navbar'
const Header = () => {
  return (
<>

    <div className="div-header" id="header" >
      <div className="container">
        <p>CLUB HOUSE</p>
        <h1>
          Elite housing in <br/>
          the center of Tashkent
        </h1>
        <div className="div-appart">
          <a href="#footer" className="buttext">Submit application</a>
          <BsArrowRight className="arrow" size={'1.5em'}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
