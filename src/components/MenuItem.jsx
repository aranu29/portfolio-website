
// A clickable item on the StartMenu that then opens to a page modal

function MenuItem(props) {
  return (
    <>
      <a 
        href="#" className="dropdown-item d-flex align-items-center p-0 gap-1"
        onClick={() => onPageOpen(props.name)} // may need to be item.id
      >
        <img src={props.imgURL} alt={props.name + " Icon"} className="ms-1"/>
        <p className="name m-0">{props.name}</p>
      </a>
    </> 
    
  );
}

export default MenuItem;