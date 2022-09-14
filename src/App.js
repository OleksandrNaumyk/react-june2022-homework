import logo from './logo.svg';
import './App.css';
import Simpsons from "./component/simpsons/Sipmsons";
import Rick from "./component/rick/Rick";

function App() {
  return (
    <div className="App">
        <h1>Sipmsons Family</h1>
        {/*<Simpsons/>*/}
        <Rick/>
    </div>
  );
}

export default App;
