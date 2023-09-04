import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, Route, Router, useNavigate, useLocation } from "react-router-dom";
import PageEntreprise from "../components/PageEntreprise"


const Inscription = () =>{
    const navigate = useNavigate()
    const insc = () =>{
        const nom = document.getElementById("iNom").value
        const description = document.getElementById("iDescription").value
        const contact = document.getElementById("iContact").value
        const mail = document.getElementById("iEmail").value
        const pass = document.getElementById("iPw").value
        const RNE = document.getElementById("RNE").value
        axios.post("http://localhost:3000/company/post", 
        {   eNom: nom,
            eDescription: description,
            eContact: contact,
            eMail: mail,
            ePassword: pass,
            eRNE: RNE
        })
          .then(response => {
            console.log(response.data);
            navigate("/PageEntreprise")
        })
        .catch(error => {
            console.error(error);
        });
        
    }
    return (
        <div>
            <h2>inscrivez vous, creez un compte pour votre entreprise</h2>
            <form onSubmit={insc} >
                <label> Nom </label> 
                <input type="text" placeholder="Nom" id="iNom"/>
                <label> Description </label> 
                <input type="text" placeholder="Description" id="iDescription"/>
                <label> Contact </label> 
                <input type="text" placeholder="Contact" id="iContact"/><br></br>
                
                <p> Maintenant pour vous faciliter la vie, vous pouvez mettre vos logins ici</p>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="iEmail"/>
                <label> Mot de pass </label>
                <input type="text" placeholder='Mot de pass' id="iPw"/>
                <label> RNE </label>
                <input type="text" placeholder='RNE' id="RNE"/>
                <button type="submit"> Terminez </button>
            </form>
        </div>
    )
}

export default Inscription;