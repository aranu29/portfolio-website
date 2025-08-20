
function DesktopIcon(props) {
  return (
    <div className="desktop-icon">
      <img src={props.imgURL}/>
      <p>{props.name}</p>
    </div>
  );
}

export default DesktopIcon;