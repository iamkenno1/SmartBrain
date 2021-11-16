import './App.css';
import Navigation from './component/Navigation/Navigation.js';
import Logo from './component/Logo/Logo.js';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.js';
import Rank from './component/Rank/Rank.js';
import Particles from 'react-particles-js';
import 'tachyons';


const particlesOptions = {
  particles: {
    shape: {
      type: 'images',
      image: [
        {src: 'path/to/first/image.svg', height: 20, width: 20},
        {src: 'path/to/second/image.jpg', height: 20, width: 20},
      ]
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className= 'particles' 
        params={particlesOptions} 
      />   
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
