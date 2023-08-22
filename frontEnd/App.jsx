import React from "react";
import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import axios from "axios";

const App = () =>{
    return (
        <div>
            <div>
                <h2 id="headerWithPhotoJobHunters"> JOB HUNTERS </h2>
            </div><br></br>
            <div>
               <h3>Espace Entreprise</h3> 
               <p> Iscription </p>
               <p> Connexion </p>
            </div>
        </div>
    )
}