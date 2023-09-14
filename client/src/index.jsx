import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import $ from 'jquery'
import List from './components/List.jsx'
import acceuil from './components/acceuil.jsx'
import entreprise from './components/entreprise.jsx'
import Support from './components/support.jsx'
import candidat from './components/candidat.jsx'
import OffreEmploi from './components/OffreEmploi.jsx'

const App = () => {
  const [items, setItems] = useState([])
  
  const [reload, setreload] = useState(false)
  useEffect(() => {
    //get all data 
    axios.get("/api/items/")
      .then((res) => {
        console.log("response.data ", res.data)
        setItems(res.data)
      })
      .catch((err) => console.error(err))
  }, [reload])
  const addoffre = () => {
    axios.post("/api/items/", { name,client,resultat,image})
      .then((res) => setreload(!reload))
      .catch((err) => console.error(err))
  }
  function removeoffre(id) {
    // Send a DELETE request to the API to remove the item with the given ID
    axios.delete(`/api/items/${id}`)
      .then((res) => {
        // Remove the item from the items array
        setItems(items.filter(item => item.idanalyses !== id));
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <div >
      <img src="./entete.jpg"  class="full-width-image"></img>
      </div>
      <div>
      <Router>
        <nav className="navbar">
          <Link to="/acceuil">Acceuil</Link>
          <Link to="/candidat">Candidat</Link>
          <Link to="/entreprise">Entreprise</Link>
          <Link to="/offreEmploi">Offre d'emploi</Link>
          <Link to="/support">Support</Link>
        </nav>

        <Routes>
          <Route path="/acceuil" element={<acceuil />} />
          <Route path="/candidat" element={<candidat />} />
          <Route path="/entreprise" element={<entreprise />} />
          <Route path="/offreEmploi" element={<OffreEmploi />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
      </div>
      <div className="contenu">
      <img src="./OIP.jpg"  class="full-width-image1"></img>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
