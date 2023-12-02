import { BrowserRouter } from "react-router-dom";

// DEPENDENCIES

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Fontawesome
import './assets/css/fontawesome.min.css';
import './assets/css/regular.min.css';
import './assets/css/solid.min.css';
import './assets/css/brands.min.css';

import './App.css';

import Container from './components/Container/Container.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
