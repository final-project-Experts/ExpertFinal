import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    let navigate = useNavigate();
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
            <form onSubmit={() => {navigate('/profil')}}>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="iEmail"/>
                <label> Mot de pass </label>
                <input type="text" placeholder='Mot de pass' id="iPw"/>
                <label> CIN </label>
                <input type="text" placeholder='cin' id="CIN"/>
                <button type="submit"> Terminez </button>
            </form>
            
        </div>
    )
}

export default Login