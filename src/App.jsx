import { Fragment } from 'react';
import { useState, useEffect, useRef } from 'react';
import '../src/assets/styles/App.css';
import "98.css";
import FooterBar from './components/FooterBar';
import desktopIcons from '../src/data/desktopIcons';
import DesktopIcon from '../src/components/DesktopIcon';

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
  const [openModals, setOpenModals] = useState([]); 
  const handlePageOpen = (pageId) => {
    setOpenModals(prev => [...prev, { id: pageId, zIndex: prev.length + 1 }]);
  };

  return (
    <div>
      {/* DESKTOP ICONS */}
      <div id="desktop-icons" className="desktop-icon-container position-absolute">
        <div className="desktop-icon-row d-flex flex-column">
            {desktopIcons.map(item => (
              <Fragment key={item.id}>
                <DesktopIcon 
                  name={item.name}
                  imgURL={item.imgURL}
                  // For when the item is clicked, open the page modal that should be displayed
                  // onPageOpen={onPageOpen}
                />
              </Fragment>
            ))}
          </div>
        </div>

      {/* FOOTER BAR */}
      <FooterBar  
        currentTime={currentTime} 
      />

   
      
    </div>
  )
}

export default App
