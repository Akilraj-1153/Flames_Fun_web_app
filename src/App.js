
import './App.css'
import Home from './Components/Home'
import image0 from './assets/Friend.png';
import image1 from './assets/Love.png'
import image2 from './assets/Affection.png'
import image3 from './assets/Marriage.png'
import image4 from './assets/enemy.png'
import image5 from './assets/sibling.png'
import image6 from './assets/FRIENDS.png'
import navimg from './assets/Navimg.png'
function App() {
  
const Displayimages =[image0,image1,image2,image3,image4,image5,image6];
  return (
    <div className='h-screen w-screen font-new '>
      <Home Displayimages={Displayimages} navimg={navimg} ></Home>
    </div>
  )
}

export default App
