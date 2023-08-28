import React from "react";
import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () =>{
    return (
        <div>
            <div>
                <h2 id="headerWithPhotoJobHunters"> JOB HUNTERS </h2>
            </div><br></br>
            <div>  
               <h3>Espace Entreprise</h3> 
               <Router>
               <div>
               <nav>

               <Link to="/inscription"> Iscription </Link>
               <Link to="/connexion">   Connexion  </Link>
               
               <Route path="/inscription" Component={Inscription}/>
               <Route path="/connexion" Component={Connection}/>
               <Route path="/PageEntreprise" component={PageEntreprise} />

               </nav>
               </div>
               </Router>
            
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"))