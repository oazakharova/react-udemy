import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={2} />
      <PetInfo animal="cat" age={10} />
    </div>
  );
}

export default App;
