import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Accueil from './Pages/Accueil';


function App() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Accueil />} />
          </Routes>
    </Router>
  );
}

export default App;

