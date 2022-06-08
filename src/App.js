import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cocktails from './componets/Cocktails';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Details from './componets/Details';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        
     <Route path='/' element = { <Cocktails />} />
     <Route path='/Details/:id' element = {<Details />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
