import '../src/assets/styles/App.css';
import "98.css";
import { Fragment } from 'react';
import { useState, useEffect, useRef } from 'react';


import FooterBar from './components/FooterBar';
import DesktopIcon from './components/DesktopIcon';
import DraggableWindow from './components/DraggableWindow';

import windowMapConfig from '../src/data/windowConfig';
import desktopIcons from '../src/data/desktopIcons';

// custom window manager hook
const useWindowManager = () => {
  const [windows, setWindows] = useState(new Map()); 
  const [activeWindow, setActiveWindow] = useState(null);
  const [nextZIndex, setNextZIndex] = useState(1000); // tracks next z-index value

  const openWindow = (windowId) => {
    const newZIndex = nextZIndex;
    setWindows(prev => {
      const newWindows = new Map(prev);
      newWindows.set(windowId, { 
        isMinimized: false, 
        zIndex: newZIndex
      });
      return newWindows;
    });
    setActiveWindow(windowId);
    setNextZIndex(prev => prev + 10); // ensures significant gap between z-indexes
  };

  const closeWindow = (windowId) => {
    setWindows(prev => {
      const newWindows = new Map(prev);
      newWindows.delete(windowId);
      return newWindows;
    });
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const minimizeWindow = (windowId) => {
    setWindows(prev => {
      const newWindows = new Map(prev);
      const windowState = newWindows.get(windowId);
      if (windowState) {
        newWindows.set(windowId, { ...windowState, isMinimized: true });
      }
      return newWindows;
    });
  };

  const restoreWindow = (windowId) => {
    const newZIndex = nextZIndex;
    setWindows(prev => {
      const newWindows = new Map(prev);
      const windowState = newWindows.get(windowId);
      if (windowState) {
        newWindows.set(windowId, { 
          ...windowState, 
          isMinimized: false,
          zIndex: newZIndex
        });
      }
      return newWindows;
    });
    setActiveWindow(windowId);
    setNextZIndex(prev => prev + 10);
  };

  const focusWindow = (windowId) => {
    const newZIndex = nextZIndex;
    setWindows(prev => {
      const newWindows = new Map(prev);
      const windowState = newWindows.get(windowId);
      if (windowState && !windowState.isMinimized) {
        newWindows.set(windowId, { 
          ...windowState, 
          zIndex: newZIndex
        });
      }
      return newWindows;
    });
    setActiveWindow(windowId);
    setNextZIndex(prev => prev + 10);
    
    // Debug log to see if focusing is working
    console.log(`Focused window ${windowId} with z-index ${newZIndex}`);
  };

  const isOpen = (windowId) => windows.has(windowId);
  const isMinimized = (windowId) => windows.get(windowId)?.isMinimized || false;
  const getZIndex = (windowId) => windows.get(windowId)?.zIndex || 1000;

  return { 
    windows, 
    activeWindow, 
    openWindow, 
    closeWindow, 
    minimizeWindow, 
    restoreWindow, 
    focusWindow,
    isOpen, 
    isMinimized,
    getZIndex
  };
}

function App() {
  // TIMER state and update
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // cleanup time interval on component unmount
    return () => clearInterval(timer);
  }, []);


  // PAGE MODALS state
  const { 
    windows, 
    activeWindow, 
    openWindow, 
    closeWindow, 
    minimizeWindow, 
    restoreWindow, 
    focusWindow,
    isOpen, 
    isMinimized,
    getZIndex
  } = useWindowManager();
  
  const windowMap = windowMapConfig;

  // gets window info for taskbar
  const getWindowInfo = (windowId) => {
    return windowMap[windowId];
  };

  // handles taskbar window clicks
  const handleTaskbarWindowClick = (windowId) => {
    if (isMinimized(windowId)) {
      restoreWindow(windowId);
    } else if (activeWindow === windowId) {
      minimizeWindow(windowId);
    } else {
      focusWindow(windowId);
    }
  };

  // window renderer
  const renderWindow = (windowId) => {
    const windowProps = windowMap[windowId];
    if (!windowProps) return null;

    const WindowComponent = windowProps.component;
    return (
      <DraggableWindow
        key={windowId}
        id={windowId}
        title={windowProps.title}
        onClose={() => closeWindow(windowId)}
        onMinimize={() => minimizeWindow(windowId)}
        onFocus={() => focusWindow(windowId)}
        initialPosition={windowProps.initialPosition}
        width={windowProps.width}
        height={windowProps.height}
        zIndex={getZIndex(windowId)}
        isMinimized={isMinimized(windowId)}
      >
        <WindowComponent />
      </DraggableWindow>
    );
  };


  return (
    <div>
      {/* DESKTOP ICONS */}
      <div id="desktop-icons" className="desktop-icon-container position-absolute">
        <div className="desktop-icon-row d-flex flex-column">
            {desktopIcons.map(item => (
              <Fragment key={item.id}>
                <DesktopIcon 
                  label={item.label}
                  imgURL={item.imgURL}
                  // For when the item is clicked, open the page modal that should be displayed
                  onClick={() => openWindow(item.id)}
                />
              </Fragment>
            ))}
          </div>
        </div>

      {/* FOOTER BAR */}
      <FooterBar  
        windows={windows}
        activeWindow={activeWindow}
        onWindowClick={handleTaskbarWindowClick}
        onWindowClose={closeWindow}
        getWindowInfo={getWindowInfo}
        onPageOpen={openWindow}
        currentTime={currentTime} 

      />

      {/* Render Open Windows */}
      {Array.from(windows.keys()).map(windowId => renderWindow(windowId))}
    </div>
  )
}

export default App;
