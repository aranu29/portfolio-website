import MyComputer from '../components/MyComputer';
import InternetExplorer from '../components/InternetExplorer';
import RecycleBin from '../components/RecycleBin';
import Messenger from '../components/Messenger';
import Documents from '../components/Documents';
import CDPlayer from '../components/CDPlayer';

const windowMapConfig = {
  'my-computer': {
    component: MyComputer,
    title: 'Welcome to My Desktop!',
    width: 400,
    height: 300,
    initialPosition: { x: 100, y: 100 }
  },
  'internet-explorer': {
    component: InternetExplorer,
    title: 'Internet Explorer', 
    width: 300,
    height: 400,
    initialPosition: { x: 150, y: 150 }
  },
  'recycle-bin': {
    component: RecycleBin,
    title: 'Recycle Bin',
    width: 350,
    height: 400,
    initialPosition: { x: 200, y: 120 }
  },
  'messenger': {
    component: Messenger,
    title: 'Messenger',
    width: 300,
    height: 250,
    initialPosition: { x: 250, y: 180 }
  },
  'documents': {
    component: Documents,
    title: 'Documents',
    width: 300,
    height: 250,
    initialPosition: { x: 250, y: 180 }
  },
  'cd-player': {
    component: CDPlayer,
    title: 'CD Player',
    width: 300,
    height: 250,
    initialPosition: { x: 250, y: 180 }
  }
};

export default windowMapConfig;
