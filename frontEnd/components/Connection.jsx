import axios from "axios"
import { error } from "console"
import { response } from "express"
import { useState } from "react"
import { Link, Route, Router } from "react-router-dom"

const Connexion = () =>{
    const [logged, setLogged] = useState(true)

    const log = () => {
        const mail = document.getElementById("cEmail").value
        const pass = document.getElementById("cPw").value

        axios.get('http://localhost:3000/company/login/', {eMail : mail, ePassword : pass})
        .then(response => {
            console.log(response.data)
            setLogged(!logged)
        })
        .catch (error =>{
            console.error(error)
        }) 
    }
    return (
        <div>
            <h2>connectez vous a votre compte</h2>
            <form onSubmit={log}>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="cEmail"/>
                <label> Mot de pass </label>
                <input type="text" placeholder='Mot de pass' id="cPw"/>
                <button type="submit"> connectez </button>
            </form>
            
            { logged && (
                <Router>
            <div>
               <nav>
                <Link to="/PageEntreprise"/>
                <Route path="/PageEntreprise" Component={PageEntreprise}/>
               </nav>
            </div>
            </Router>
            )}
            
            
        </div>
    )
}

export default Connexion