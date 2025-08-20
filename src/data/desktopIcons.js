import myComputerIcon from "../assets/images/icons/my-computer-icon.png";
import ieIcon from "../assets/images/icons/ie-icon.png";
import recycleBinIcon from "../assets/images/icons/recycle_bin_empty-icon.png";
import messengerIcon from "../assets/images/icons/messenger-icon.png";
import documentsIcon from "../assets/images/icons/documents-folder-icon.png";
import cdPLayerIcon from "../assets/images/icons/cd-audio-icon.png";

const desktopIcons = [
  {
    id: 'my-computer',
    label: "My Computer",
    imgURL: myComputerIcon
    },
  {
    id:'internet-explorer',
    label: "Internet Explorer",
    imgURL: ieIcon
  },
  {
    id: 'recycle-bin',
    label: "Recycle Bin",
    imgURL: recycleBinIcon
  },
  {
    id:'messenger',
    label: "Messenger",
    imgURL: messengerIcon
  },
  {
    id: 'documents',
    label: "Documents",
    imgURL: documentsIcon
  },
  {
    id: 'cd-player',
    label: "CD Player",
    imgURL: cdPLayerIcon
  }

];

export default desktopIcons;
