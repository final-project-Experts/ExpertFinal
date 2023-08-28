import axios from "axios";
import { response } from "express";
import React from "react";

const loggin = () =>{
    const logg = () =>{
        const mail = document.getElementById("iEmail").value
        const pass = document.getElementById("iPw").value
        const cin = document.getElementById("CIN").value
        axios.post("http://localhost:3000/api/items/addConnexion",
        {   candidatMail: mail,
            candidatPassword: pass,
            candidatCIN: cin})
          .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <h2> inscrivez vous, creez votre compte </h2>
            <form onSubmit={logg}>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="iEmail"/>
                <label> Mot de pass </label>
                <input type="text" placeholder='Mot de pass' id="iPw"/>
                <label> CIN </label>
                <input type="text" placeholder='cin' id="CIN"/>
                <button type="submit"> Terminez </button>
            </form>
            {submitted&&(
            <Router>
                <div>
                <nav>
                <Link to="/Logincandidat"/>
                <Route path="/Logincandidat" element={<Logincandidat/>}/>
                </nav>
                </div>
                </Router>
                )}
        </div>
    )
}

export default loggin