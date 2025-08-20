import { Fragment } from 'react';
import DraggableWindow from './DraggableWindow';


function DesktopIcon(props) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="desktop-icon" onClick={props.onClick}>
        <img src={props.imgURL}/>
        <p>{props.label}</p>
      </div>
    </Fragment>
  );
}

export default DesktopIcon;