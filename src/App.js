import logo from './logo.svg';
import './App.css';
import { Header } from './lifecycleMethods/mounting/Constructor';
import { Updating } from './lifecycleMethods/updating/ShouldComponentUpdate';

function App() {
  return (
    <div className="App">
      
      <Updating/>
    </div>
  );
}

export default App;
