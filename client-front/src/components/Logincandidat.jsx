import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';



const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    let navigate = useNavigate();
    
    const authenticate = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/api/login",
        {   cMail: email,
            cPassword: password,
        })
          .then(response => {
            navigate('/profil', { state: { user :response.data[0] } });
        })
        .catch(error => {
            setError(true)
        });
    }
    return (
        <div>
            <h2> Connectez vous </h2>
            <form onSubmit={e => {authenticate(e)}}>
                <label id="cemail"> E-mail </label> 
                <input type="text" placeholder="Email" id="cEmail" onChange={e=> setEmail(e.target.value)}/>
                <label id="motdepass"> Mot de pass </label>
                <input type="password" placeholder='Mot de pass' id="iPw" onChange={e=> setPassword(e.target.value)}/>
                <button type="submit"> Terminez </button><br></br>
                { error && <label style={{"color":"red"}} >bad credentials</label>}
            </form>
        </div>
    )
}

export default Login