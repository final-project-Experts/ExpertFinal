import axios from "axios";
import React from "react";
import { useNavigate, useLocation,redirect } from "react-router-dom";

const Profil = () =>{
    let navigate = useNavigate();
    const {state} = useLocation();
    if(!state?.user){
        redirect('/login');
    }
    else {
        const { user } = state;
 
        const prof = () =>{
            const nomPrenom = document.getElementById("iNomPrenom").value
            const qualification = document.getElementById("iQ").value
            const mail = document.getElementById("iEmail").value
            const cv = document.getElementById("iCv").value
            axios.get("http://localhost:3001/api/items/getAllC",
            {   cNomPrenom: nomPrenom,
                cQualifications: qualification,
                cMail: mail,
                cCV : cv
            })
              .then(response => {
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
                    <input disabled type="text" placeholder="nomPrenom" id="iNomPrenom" value={user.cNomPrenom}/>
                    <label> Qualification </label>
                    <input  disabled type="text" placeholder='qualification' id="iQ" value={user.cQualifications}/>
                    <label> E-mail </label> 
                    <input  disabled type="text" placeholder="Email" id="iEmail" value={user.cMail}/>
                    <label> CV </label>
                    <input  disabled type="text" placeholder='cv' id="iCv" value={user.cCV}/>
                    <button type="submit"> Terminez </button>
                </form>
            </div>
        )
    }

}

export default Profil