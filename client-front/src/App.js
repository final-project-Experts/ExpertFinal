import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Logincandidat';
import Inscription from './components/Inscriptioncandidat';
import Profil from './components/Profilcandidat'
import './App.css';


function Header() {
    return (
      <div>
        <h1> Welcome to Job Hunters </h1>
        <nav>
          <Link to="/login"> Login </Link> {" || "}
          <Link to="/inscription"> Inscription </Link>
          <Link to="/profil"></Link>
        </nav>
      </div>
    );
  }



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/profil" element={<Profil />} />
        </Routes>
        </div>
      </Router>
    </div>
)
}

export default App;
