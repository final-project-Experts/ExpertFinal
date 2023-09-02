import React from "react";
import { useEffect, useState } from "react";
import  ReactDOM from "react-dom";
import {Router, Route, Link, Routes, Navigate, useNavigate, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Inscription from "./components/Inscription.jsx";



const App = () =>{
    return (
        <div>
            <div>
                <h2 id="headerWithPhotoJobHunters"> JOB HUNTERS </h2>
            </div><br></br>
            <div>  
               <h3>Espace Entreprise</h3> 
               <Router>
               <nav>

               <Link to="/Inscription"> Iscription </Link>
               <Link to="/Connexion">   Connexion  </Link>
               
               </nav>
               <Routes>
               <Route path="/Inscription"  element ={<Inscription />}  />
               <Route path="/Connection"  component ={<Connection />}  />
               <Route path="/PageEntreprise"  element    />
               </Routes>
               </Router>
            
            </div>
        </div>
    )
}

export default App;
