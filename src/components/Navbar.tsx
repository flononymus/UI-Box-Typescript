import React, { useState, useEffect } from 'react';

export default function Navbar() {


  // const [isDark, setIsDark] = useState(false)
  // function toggleIcon() {
  //   setIsDark(!isDark);
  // }

  return(

  <nav>
    <div className="left-buttons">

      <button className="navbarButton" id="homeButton">
        <span className="material-symbols-outlined">
          home
        </span>
      </button>

      <button className="navbarButton" id="buttonspageButton">
        <span className="material-symbols-outlined">
          apps
        </span>
      </button>

      <button className="navbarButton" id="spinnerpageButton">
        <span className="material-symbols-outlined">
          {/* spoke */}
          network_node
        </span>
      </button>

      <button className="navbarButton" id="particlespageButton">
        <span className="material-symbols-outlined">
          lens_blur
        </span>
      </button>

      <button className="navbarButton" id="switchespageButton">
        <span className="material-symbols-outlined">
          {/* page_info */}
          toggle_on 
        </span>
      </button>

      <button className="navbarButton" id="tetherpageButton">
        <span className="material-symbols-outlined">
          {/* linked_services */}
          tenancy
        </span>
      </button>

      <button className="navbarButton" id="ballpageButton">
        <span className="material-symbols-outlined">
          airline_stops
        </span>
      </button>

      <button className="navbarButton" id="joystickpageButton">
        <span className="material-symbols-outlined">
          {/* keyboard_keys */}
          joystick 
        </span>
      </button>

      {/* <button id="lockpageButton">
        <span className="material-symbols-outlined">
            refresh
        </span>
      </button> */}

      </div>





      {/* <div className="settingsButton">
        <button id="settingsButton">
          <span className="material-symbols-outlined">
            settings
          </span>
        </button>
      </div> */}

      <div className="settingsButton">
        <button id="darkmodeToggleButton"
        // onMouseDown={toggleIcon}
        >
          <span className="material-symbols-outlined">
            contrast
          </span>
        </button>
      </div>

    </nav>
  )
}

