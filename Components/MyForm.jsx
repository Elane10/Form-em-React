import "./MyForm.css";

import { useState } from "react";


const MyForm = ({userName, userEmail}) => {
    //3 - gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("user");

    const handleName = (e) => {
        setName(e.target.value)
    };

    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);

        //validação
        //envio

        // 7 - limpar o form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

    console.log(name, email);

  return <div>
        {/* 1 - Criação de form */}
        {/* 5 - envio de  form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName} 
                value={name || ""}/>
              {/* 6 - controlando input */}  
            </div>

            {/* 2 - label envolvendo input */}
            <label>
             {/* 4 - simplificando maipulação */}
                <span>E-mail:</span>
                <input type="text" 
                name="email" 
                placeholder="Digite seu e-mail" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email || ""}/>
            {/* 6 - controlando input */}  
            </label>
            {/* 8 - textarea */} 
            <label>
               <span>Bio:</span>
                <textarea name="bio" 
                placeholder="Descrição do usúario"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                ></textarea>  
            </label>
            {/* 9 - select */} 
            <label>
                <span>Função no sistema</span>
                <select 
                name="role"
                onChange={(e) => setRole(e.target.value)}
                value={role}
                >
                    <option value="user">Usúario</option>
                    <option value="edit">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            
            <input type="submit" value="Enviar"/>
        </form>
    </div>;
};

export default MyForm;