import { generateId } from "../utils/index";
import myComputerIcon from "../assets/images/icons/my-computer-icon.png";
import ieIcon from "../assets/images/icons/ie-icon.png";
import recycleBinIcon from "../assets/images/icons/recycle_bin_empty-icon.png";
import messengerIcon from "../assets/images/icons/messenger-icon.png";
import documentsIcon from "../assets/images/icons/documents-folder-icon.png";
import cdPLayerIcon from "../assets/images/icons/cd-audio-icon.png";

const desktopIcons = [
  {
    id: generateId(),
    name: "My Computer",
    imgURL: myComputerIcon
    },
  {
    id: generateId(),
    name: "Internet Explorer",
    imgURL: ieIcon
  },
  {
    id: generateId(),
    name: "Recycle Bin",
    imgURL: recycleBinIcon
  },
  {
    id: generateId(),
    name: "Messenger",
    imgURL: messengerIcon
  },
  {
    id: generateId(),
    name: "Documents",
    imgURL: documentsIcon
  },
  {
    id: generateId(),
    name: "CD Player",
    imgURL: cdPLayerIcon
  }

];

export default desktopIcons;
