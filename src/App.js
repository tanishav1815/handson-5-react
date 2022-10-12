import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import UseState1 from './Usestate1';
import { Hoc } from './components/Hoc';


function App() {
  return (
    <div className="App">
      <UseState1/>
      <Hoc/>
    </div>
  );
}

export default App;
