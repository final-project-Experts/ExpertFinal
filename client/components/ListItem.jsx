import axios from 'axios';
import React,{useState} from 'react';

const ListItem = ({ item,reload,setReload }) => {
    
    const [show, setshow] = useState(false)
    
    const [espaceCondidat, setespaceCondidat] = useState("")
    const [inscription, setinscription] = useState("")
    const [connexion, setconnexion] = useState("")


    const [espaceCondidatInscription, setespaceCondidatInscription] = useState("")
    const [firstNameAndLastName, setfirstNameAndLastName] = useState("")
    const [qualification, setqualification] = useState("")
    const [email, setemail] = useState("")
    const [uploadCv,setuploadCv] = useState("")


    const [espaceCondidatLogin, setespaceCondidatLogin] = useState("")
    const [emailAdresseCondidat, setemailAdresseCondidat] = useState("")
    const [passworldCondidat, setpassworldCondidat] = useState("")


    const [profileCondidat, setprofileCondidat] = useState("")
    const [firstNameAndLastNamePorfil, setfirstNameAndLastNamePorfil] = useState("")
    const [qualificationProfile, setqualificationProfile] = useState("")
    const [emailPorfile, setemailPorfile] = useState("")
    const [cvProfile, setcvProfile] = useState("")

const remove=(id)=>{
    axios.delete("/api/items/"+id)
    .then((res)=>{
   setReload(!reload)
    })
    .catch((err)=>console.error(err))
  }
  
  const modify=(id)=>{
    axios.put("/api/items/"+id,{firstNameAndLastName,qualification,email,uploadCv,emailAdresseCondidat,passworldCondidat,firstNameAndLastNamePorfil,qualificationProfile,emailPorfile,cvProfile})
    .then((res)=>setReload(!reload))
    .catch((err)=>console.error(err))
  }
   return (





   )
}





export default ListItem;