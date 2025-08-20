import { Fragment } from "react";
import  { useState } from "react";
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
function FooterBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="footer-bar">
      <nav className="navbar window fixed-bottom navbar-expand-lg"> {/* container */}
        <div className="container-fluid d-flex justify-content-start position-absolute p-1"> {/* row */}
          {/* START MENU - ANCHOR BUTTON */}
          <div id="start-menu">
            <ul className="navbar-nav">
              <li className="nav-item dropup">
                <button id="footer-start-btn"
                  onClick={toggleMenu}
                  className={`d-flex justify-content-center align-items-center gap-2 me-1 ${isMenuOpen && 'pressed'}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    <img src={startMenuIcon} alt="start-menu-icon" />
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
                          onPageOpen={props.onPageOpen}
                        />
                        
                        {/* Add divider after specific items */}
                        {(index === 0 || index === 6) && (
                          <div className="start-menu-item-divider "></div>
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
                onClick={() => props.onPageOpen('internet-explorer')}
                id="footer-ie"
                className=""/>
            </li>
            <li className="nav-item">
                <img 
                src={messengerIcon}
                alt="messenger-icon" 
                onClick={() => props.onPageOpen('messenger')}
                id="footer-messenger"
                width={18}
                className="pb-1"/>
            </li>
            <li className="nav-item">
                <img 
                src={cdPlayerIcon}
                alt="cd-player-icon" 
                onClick={() => props.onPageOpen('cd-player')}
                id="footer-cd-player"
                width={18}
                className=""/>
            </li>
            <li className="nav-item">
              <div className="footer-bar-divider"></div>
            </li>
          </ul>

          {/* Where the draggable windows will show up */}
          {/* Window buttons */}
          <div className="d-flex gap-2 flex-grow-1">
            {Array.from(props.windows.keys()).map(windowId => {
              const windowInfo = props.getWindowInfo(windowId);
              const isActive = props.activeWindow === windowId;
              const isMinimized = props.windows.get(windowId)?.isMinimized;
              
              return (
                <button
                  key={windowId}
                  onClick={() => props.onWindowClick(windowId)}
                  className={`btn btn-sm d-flex align-items-center gap-2 ${
                    isActive && !isMinimized ? 'btn-light' : 'btn-outline-light'
                  } ${isMinimized ? 'opacity-75' : ''}`}
                  style={{ 
                    maxWidth: '200px',
                    minWidth: '120px'
                  }}
                >
                  <span className="text-truncate">{windowInfo?.title || windowId}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onWindowClose(windowId);
                    }}
                    className="btn btn-sm p-0 ms-1"
                    style={{ width: '16px', height: '16px', fontSize: '10px' }}
                  >
                    x
                  </button>
                </button>
              );
            })}
          </div>
          {/* <ul id="draggable-windows-box" className="navbar-nav d-flex flex-row justify-content-center align-items-center flex-grow-1">
            <li className="nav-item">

            </li>

          </ul> */}

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
              <ul className="dropdown-menu window d-flex flex-column align-items-center" onClick={(e) => e.stopPropagation()}>
                <p className="mb-0 ms-2">Volume</p>
                <div className="volume-triangle-slider d-flex flex-row justify-content-center align-items-center me-3">
                  <div className="volume-triangle mt-3"></div>
                  <div className="is-vertical">
                    <input
                      id="range23"
                      className="has-box-indicator volume-slider m-0"
                      type="range"
                      min="1"
                      max="11"
                      defaultValue="5"
                    />
                  </div>
                </div>
                <div className="mute-btn pt-2 ms-1" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" id="mute-checkbox"/>
                  <label htmlFor="mute-checkbox"><u>M</u>ute</label>
                </div>
              </ul>
            </li>
            <li id="timer" className="nav-item">
              <span>{props.currentTime.toLocaleTimeString()}</span>
            </li>
          </ul>
          </div>
      </nav> 
    </div>
  );
}

export default FooterBar;