import { generateId } from "../utils/index";

// images
import windowsUpdateIcon from "../assets/images/icons/windows-update-small-icon.png";
import programsIcon from "../assets/images/icons/programs-small-icon.png";
import favoritesIcon from "../assets/images/icons/favorites-small-icon.png";
import documentsIcon from "../assets/images/icons/directory-documents-small-icon.png";
import settingsIcon from "../assets/images/icons/settings-small-icon.png";
import findIcon from  "../assets/images/icons/find-small-icon.png";
import helpIcon from "../assets/images/icons/help-small-icon.png";
import logOffIcon from "../assets/images/icons/log-off-small-icon.png";
import shutDownIcon from "../assets/images/icons/shut-down-small-icon.png";

const menuItems = [
  {
    id: generateId(),
    name: "Windows Update",
    imgURL: windowsUpdateIcon
    },
  {
    id: generateId(),
    name: "Programs",
    imgURL: programsIcon
  },
  {
    id: generateId(),
    name: "Favorites",
    imgURL: favoritesIcon
  },
  {
    id: generateId(),
    name: "Documents",
    imgURL: documentsIcon
  },
  {
    id: generateId(),
    name: "Settings",
    imgURL: settingsIcon
  },
  {
    id: generateId(),
    name: "Find",
    imgURL: findIcon
  },
  {
    id: generateId(),
    name: "Help",
    imgURL: helpIcon
  },
  {
    id: generateId(),
    name: "Log Off",
    imgURL: logOffIcon
  },
  {
    id: generateId(),
    name: "Shut Down",
    imgURL: shutDownIcon
  }
];

export default menuItems;
