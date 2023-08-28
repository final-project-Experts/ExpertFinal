import axios from "axios";
import { response } from "express";
import React from "react";

const profil = () =>{
    const prof = () =>{
        const nomPrenom = document.getElementById("iNomPrenom").value
        const qualification = document.getElementById("iQ").value
        const mail = document.getElementById("iEmail").value
        const cv = document.getElementById("iCv").value
        axios.post("http://localhost:3000/api/items/addConnexion",
        {   candidatNomPrenom: nomPrenom,
            candidatQualification: qualification,
            candidatMail: mail,
            candidatCV : cv
        })
          .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <h2> Profil Candidat </h2>
            <form onSubmit={prof}>
                <label> Nom/Prénom </label> 
                <input type="text" placeholder="nomPrenom" id="iNomPrenom"/>
                <label> Qualification </label>
                <input type="text" placeholder='qualification' id="iQ"/>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="iEmail"/>
                <label> CV </label>
                <input type="text" placeholder='cv' id="iCv"/>
                <button type="submit"> Terminez </button>
            </form>
            {submitted&&(
            <Router>
                <div>
                <nav>
                <Link to="/Profilcandidat"/>
                <Route path="/Profilcandidat" element={<Profilcandidat/>}/>
                </nav>
                </div>
                </Router>
                )}
        </div>
    )
}

export default profil