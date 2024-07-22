import './App.css';
import Props from './Components/Props';
import Third from './Components/Third';
import Second from './Second';


function App() {
  const username = "Roshan";
  const age = ' 25 years old dear';
  const name = 'Roshan Mishra';

  return (
    <div className="App">
    <Props name ={username}/>
    <Second age={age}/>
    <Third name={name}/>
    </div>
  );
}
export default App;

