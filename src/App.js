import logo from './logo.svg';
import './App.css';
import 'aframe'

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-sphere
          position="2 1.5 -3"
          rotation="0 0 0"
          scale="1 1 1"
          color="yellow"
          radius="0.5"
          wireframe="true"
        > </a-sphere>
      </a-scene>
    </div>
  );
}

export default App;
