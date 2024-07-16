import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={2} hasPet />
      <PetInfo animal="cat" age={10} hasPet={true} />
      <PetInfo hasPet={false} />
    </div>
  );
}

export default App;
