import {useState, useContext} from "react"
import { Contexto } from "../../contexts/Contexto"

export default function Form(){
    const myContext = useContext(Contexto)
    const[nome, setNome] = useState ("")

    async function Cadastrar(){
        myContext.create(nome).then((res => { console.log(res)}))
    }

    return (
        <div>
            <input onChange={e => setNome(e.target.value)} type="text" />
            <button onClick={Cadastrar}> Salvar</button>
        </div>
    );
}