import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Connection = () =>{
    const navigate = useNavigate()
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const log = (e) => {
        e.preventDefault()

        axios.get('http://localhost:3001/api/login', {eMail : mail, ePassword : pass,})
        .then(response => {
            console.log(response)
            navigate("/PageEntreprise")
        })
        .catch (error =>{
            console.error(error);
            console.log(mail, pass)
                }) 
    }
    return (
        <div>
            <h2>connectez vous a votre compte</h2>
            <form onSubmit={(e)=>{log(e)}}>
                <label> E-mail </label> 
                <input type="text" onChange={(e)=>{setMail(e.target.value)}} placeholder="Email" id="cEmail"/>
                <label> Mot de pass </label>
                <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder='Mot de pass' id="cPw"/>
                <button type="submit"> connecter </button>

            </form>
            
            
        </div>
    )
}

export default Connection