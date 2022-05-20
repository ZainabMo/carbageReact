import './App.css';
import GarbageInput, { TrackLocation } from './MainPage';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">Carbage</a>
        <a href="#">Home</a>
        <a href="#">Total CF</a>
        <a href="#">Reduce CF</a>
        <a href="#">Help</a>
        <a href="#">Profile</a>
      </nav>
      <GarbageInput/>
      <TrackLocation/>
    </div>
  );
}

export default App;
