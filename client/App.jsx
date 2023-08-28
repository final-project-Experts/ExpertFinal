import ReactDOM from 'react-dom'

const App = () =>{
    return (
        <div>
            <div>
                <h2 id="headerWithPhotoJobHunters"> JOB HUNTERS </h2>
            </div><br></br>
            <div>
               <h3> Espace candidat </h3> 
               <Router>
               <div>
               <nav>

               <Link to="/inscriptioncandidat"> Iscription </Link>
               <Link to="/connexioncandidat">   Connexion  </Link>
               <Link to="/Profilcandidat">   Profil  </Link>

               <Route path="/Inscriptioncandidat" element={<Inscriptioncandidat/>}/>
               <Route path="/Logincandidat" element={<Logincandidat/>}/>
               <Route path="/Profilcandidat" element={<Profilcandidat/>} />

               </nav>
               </div>
               </Router>

            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("App"))