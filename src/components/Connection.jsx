import axios from "axios"
import { useState } from "react"
import { Link, Navigate, Route, Router, useNavigate } from "react-router-dom"

const Connection = () =>{
    const navigate = useNavigate()

    const log = (e) => {
        e.preventDefault()
        const mail = document.getElementById("cEmail").value
        const pass = document.getElementById("cPw").value

        axios.post('http://localhost:3001/company/login/', {eMail : mail, ePassword : pass})
        .then(response => {
            console.log(response.data)
            navigate("/PageEntreprise")
        })
        .catch (error =>{
            console.error(error)
        }) 
    }
    return (
        <div>
            <h2>connectez vous a votre compte</h2>
            <form onSubmit={e =>{log(e)}}>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="cEmail"/>
                <label> Mot de pass </label>
                <input type="text" placeholder='Mot de pass' id="cPw"/>
                <Navigate to="/PageEntreprise" replace />
                <button type="submit"> connectez </button>

            </form>
            
            {/* { logged && (
                <Router>
            <div>
               <nav>
                <Link to="/PageEntreprise"/>
                <Route path="/PageEntreprise" Component={<PageEntreprise />}/>
               </nav>
            </div>
            </Router>
            )} */}
            
            
        </div>
    )
}

export default Connection