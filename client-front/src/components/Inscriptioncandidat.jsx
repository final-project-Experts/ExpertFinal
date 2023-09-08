import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Inscription = () =>{
    let navigate = useNavigate();
    const [nomPrenom, setNomPrenom] = useState("");
    const [qualification, setQualification] = useState('');
    const [mail, setMail] = useState("");
    const [cv, setCV] = useState('');
    const [password, setPassword] = useState('');
    const insc = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/api/addC",
        {   cNomPrenom: nomPrenom,
            cQualifications: qualification,
            cMail: mail,
            cCV : cv,
            cPassword : password
        })
          .then(response => {
            navigate('/login')
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    return (
        <div>
            <h2> inscrivez vous , creez votre compte </h2>
            <form onSubmit={e => {insc(e)}}>
                <label> Nom/Prénom </label> 
                <input type="text" placeholder="nomPrenom" id="iNomPrenom" onChange={e=> setNomPrenom(e.target.value)}/>
                <label> Qualification </label>
                <input type="text" placeholder='qualification' id="iQ"  onChange={e=> setQualification(e.target.value)}/>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="iEmail" onChange={e=> setMail(e.target.value)}/>
                <label> CV </label>
                <input type="text" placeholder='cv' id="iCv" onChange={e=> setCV(e.target.value)}/>
                <label> Password </label>
                <input type="password" placeholder='Password' id="iPassWord" onChange={e=> setPassword(e.target.value)}/>
                <button type="submit"> Terminez </button>
            </form>
        </div>
    )
}

export default Inscription