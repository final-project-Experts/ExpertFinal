import React from "react";

const Inscription = () =>{
    return (
        <div>
            <h2>inscrivez vous, creez un compte pour votre entreprise</h2>
            <form>
                <label> E-mail </label> 
                <input type="text" placeholder="Email"/>
                <label> Mot de pass </label>
                <input type="text" placeholder='Mot de pass'/>
                <label> Numero de TVA </label>
                <input type="text" placeholder='numero de TVA'/>
                <button type="submit"> inscription </button>
            </form>
        </div>
    )
}