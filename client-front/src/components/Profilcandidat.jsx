import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profil = () =>{
    let navigate = useNavigate();
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
            navigate("/profil")
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <h2> Profil Candidat </h2>
            <form onSubmit={() => {prof()}}>
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
        </div>
    )
}

export default Profil