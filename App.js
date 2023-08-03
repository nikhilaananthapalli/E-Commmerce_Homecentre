import logo from './logo.svg';
import './App.css';
import './Components/Home';
import Home from './Components/Home';
import Livingroom from './Components/Livingroom';
import {Routes,Route, Link} from 'react-router-dom';
import Recliners from './Components/Recliners';
import Bedroom from './Components/Bedroom';
import Kitchen from './Components/Kitchen';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/Home' element={<Home/>}/>
          <Route path='/Livingroom' element={<Livingroom/>}/>
          <Route path='/Bedroom' element={<Bedroom/>}/>
          <Route path='/Kitchen' element={<Kitchen/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
