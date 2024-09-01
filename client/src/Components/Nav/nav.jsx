import React from "react";
import "./nav.css";
import { IoMenu } from "react-icons/io5";

function nav() {
  return (
    <div className='nav'>
      <div className='nav__icon'>
        <h2>ESL Blacklist</h2>
      </div>
      <div className='nav__menu'>
        <IoMenu />
      </div>
    </div>
  );
}

export default nav;
