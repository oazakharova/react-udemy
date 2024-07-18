import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="orange">
        <h2>text inside of the first wrapper</h2>
        <button>click me</button>
      </Wrapper>
      <Wrapper color="green">
        <h2>text inside of the second wrapper</h2>
        <button>delete me</button>
      </Wrapper>
    </div>
  );
}

export default App;
