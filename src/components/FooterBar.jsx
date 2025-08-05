import { Fragment } from "react";
import  { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MenuItem from "./MenuItem";

// data
import menuItems from "../data/menuItems";

// image imports
import startMenuIcon from "../assets/images/icons/start-menu-small-icon.png";
import internetExplorerIcon from "../assets/images/icons/ie-small-icon.png";
import messengerIcon from "../assets/images/icons/messenger-small-icon.png";
import volumeIcon from "../assets/images/icons/volume-small-icon.png";
import cdPlayerIcon from "../assets/images/icons/cd-player-small-icon.png";

// FOOTER BAR JUST HAS THE BUTTONS LOGIC
function FooterBar({onPageOpen, currentTime}) {
  return (
    <div id="footer-bar">
      <nav className="navbar window custom-window fixed-bottom navbar-expand-lg"> {/* container */}
        <div className="container-fluid d-flex justify-content-start position-absolute p-1"> {/* row */}
          {/* START MENU - ANCHOR BUTTON */}
          <div id="start-menu">
            <ul className="navbar-nav">
              <li className="nav-item dropup">
                <button id="footer-start-btn"
                  className="d-flex justify-content-center align-items-center gap-2 me-1"  
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    <img src={startMenuIcon} alt="start-menu-icon" className="d-inline-block justify-content-center"/>
                    <b>Start</b>
                </button>
                <ul className="dropdown-menu window d-flex gap-0">
                  <div className="title-bar inactive d-flex justify-content-start align-items-center p-0">
                    <span className="windows-text mt-1">Windows</span><span className="ninety-five-text">95</span>
                  </div>
                  <div className="menu-items-container d-flex flex-column">
                    {menuItems.map((item, index) => (
                      <Fragment key={item.id}>
                        <MenuItem
                          name={item.name}
                          imgURL={item.imgURL}
                          onPageOpen={onPageOpen}
                        />
                        
                        {/* Add divider after specific items */}
                        {(index === 0 || index === 6) && (
                          <div className="start-menu-item-divider ">                      </div>
                        )}
                      </Fragment>
                    ))}    
                  </div>
                      
                </ul>
              </li>
            </ul>
          </div>

          {/* THE ICON BUTTONS AFTER START MENU */}
          <ul id="after-start-icon-box" className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-2">
            <li className="nav-item">
              <div className="footer-bar-divider"></div>
            </li>
            <li className="nav-item">
                <img 
                src={internetExplorerIcon}
                alt="ie-icon" 
                onClick={() => onPageOpen('internet-explorer')}
                id="footer-ie"
                className=""/>
            </li>
            <li className="nav-item">
                <img 
                src={messengerIcon}
                alt="messenger-icon" 
                onClick={() => onPageOpen('messenger')}
                id="footer-messenger"
                width={18}
                className="pb-1"/>
            </li>
            <li className="nav-item">
                <img 
                src={cdPlayerIcon}
                alt="cd-player-icon" 
                onClick={() => onPageOpen('messenger')}
                id="footer-cd-player"
                width={18}
                className=""/>
            </li>
            <li className="nav-item">
              <div className="footer-bar-divider"></div>
            </li>
          </ul>

          {/* Where the draggable windows will show up */}
          <ul id="draggable-windows-box" className="navbar-nav d-flex flex-row justify-content-center align-items-center flex-grow-1">
            <li className="nav-item">

            </li>

          </ul>

          {/* THE ICON BUTTONS AT END OF WINDOW */}
          <ul id="end-of-footer-box" className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-2 ms-auto">            
            <li className="nav-item dropup">
              <button id="footer-volume-btn"
                className="d-flex justify-content-center align-items-center p-0"  
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img 
                  src={volumeIcon}
                  alt="volume-icon" 
                  width={18}
                  className=""/>
              </button>
              <ul className="dropdown-menu pt-0">
                {/* <div class="field-row"> */}
                  {/* <label htmlFor="range25"></label> */}
                  <div className="is-vertical">
                    {/* <label htmlFor="range23">Low</label> */}
                    <input id="range23" className="has-box-indicator" type="range" min="1" max="11" value="5" />
                    {/* <label htmlFor="range25">High</label> */}
                  </div>
                {/* </div> */}
              </ul>
            </li>
            <li id="timer" className="nav-item">
              <span>{currentTime.toLocaleTimeString()}</span>
            </li>
          </ul>
          </div>
      </nav> 
    </div>
  );
}

export default FooterBar;