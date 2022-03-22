import { BrowserRouter, Route , Routes} from "react-router-dom";
import Homescreen from './screens/Homescreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="topHeader">Ecomm-Product</div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homescreen/>} />
        </Routes>      
      </main>      
    </div>
    </BrowserRouter>
  );
}

export default App;