import React from "react";
import "./landing.css";

function landing() {
  return (
    <div className='landing'>
      <div className='landing_title'>
        <h2>Hagwon Blacklist</h2>
      </div>
      <div className='landing_item'>
        <div className='landing_search'>
          <input type='text' value='Start typing to search..' />
        </div>
        <div className='landing_button'>
          <button type='button'>SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default landing;
