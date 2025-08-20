import { useState, useRef, useEffect } from 'react';

function DraggableWindow(props) {
  const [position, setPosition] = useState(() => ({
    x: (props.initialPosition?.x || 100) + Math.random() * 50,
    y: (props.initialPosition?.y || 100) + Math.random() * 50
  }));
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    // always focus this window when any part of it is clicked
    if (props.onFocus) {
      props.onFocus();
    }

    // only start dragging if clicking on title bar (not controls)
    if (e.target.closest('.window-controls')) return;
    if (!e.target.closest('.card-header')) return;
    
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // handle clicks anywhere on the window to bring it to the front
  const handleWindowClick = (e) => {
    if (props.onFocus) {
      props.onFocus();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      const maxX = window.innerWidth - (props.width || 400);
      const maxY = window.innerHeight - (props.height || 300) - 60; // account for footerBar

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, props.width, props.height]);

  const windowStyle = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    width: props.width || 400,
    height: props.height || 300,
    zIndex: props.zIndex || 1000,
    cursor: isDragging ? 'grabbing' : 'default', // change from 'grab' to 'default' if not dragging
    display: props.isMinimized ? 'none' : 'block'
  };

  const titleBarStyle = {
    cursor: isDragging ? 'grabbing' : 'grab', // only title bar shows grab cursor
    userSelect: 'none'
  };

  const contentStyle = {
    height: (props.height || 300) - 56,
    overflowY: 'auto'
  };

  return (
    <div
      ref={windowRef}
      className="card shadow-lg"
      style={windowStyle}
      onClick={handleWindowClick} // focus window on any click
    >
      <div 
        className="card-header bg-primary text-white d-flex justify-content-between align-items-center" 
        style={titleBarStyle}
        onMouseDown={handleMouseDown} // only allow drag functionality from title bar (for now)
      >
        <span className="fw-medium">{props.title || 'Window'}</span>
        <div className="window-controls d-flex gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevents window focus when clicking minimize
              props.onMinimize();
            }}
            className="btn btn-warning btn-sm"
            style={{ width: '24px', height: '24px', padding: 0, lineHeight: 1 }}
            title="Minimize"
          >
            −
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevents window focus when clicking close
              props.onClose();
            }}
            className="btn btn-danger btn-sm"
            style={{ width: '24px', height: '24px', padding: 0, lineHeight: 1 }}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>
      
      {/* PASSED IN COMPONENT */}
      <div className="card-body" style={contentStyle}>
        {props.children}
      </div>
    </div>
  );
}


export default DraggableWindow; 