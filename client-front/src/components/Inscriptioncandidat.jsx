import axios from "axios";
import { useNavigate } from "react-router-dom";

const Inscription = () =>{
    let navigate = useNavigate();
    const insc = () =>{
        const nomPrenom = document.getElementById("iNomPrenom").value
        const qualification = document.getElementById("iQ").value
        const mail = document.getElementById("iEmail").value
        const cv = document.getElementById("iCv").value
        const password = document.getElementById("iPassWord").value
        axios.post("http://localhost:3000/api/items/addConnexion",
        {   candidatNomPrenom: nomPrenom,
            candidatQualification: qualification,
            candidatMail: mail,
            candidatCV : cv,
            candidatPassword : password
        })
          .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    return (
        <div>
            <h2> inscrivez vous , creez votre compte </h2>
            <form onSubmit={() => {navigate('/profil')}}>
                <label> Nom/Prénom </label> 
                <input type="text" placeholder="nomPrenom" id="iNomPrenom"/>
                <label> Qualification </label>
                <input type="text" placeholder='qualification' id="iQ"/>
                <label> E-mail </label> 
                <input type="text" placeholder="Email" id="iEmail"/>
                <label> CV </label>
                <input type="text" placeholder='cv' id="iCv"/>
                <label> PassWord </label>
                <input type="text" placeholder='Password' id="iPassWord"/>
                <button type="submit"> Terminez </button>
            </form>
        </div>
    )
}

export default Inscription