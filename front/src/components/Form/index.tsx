import {useState, useContext} from "react"
import { Contexto } from "../../contexts/Contexto"
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  height: 45px;
  margin: 5px;
`;

export default function Form(){
    const myContext = useContext(Contexto)
    const[nome, setNome] = useState ("")

    async function Cadastrar(){
        myContext.create(nome).then((res => { console.log(res)}))
    }

    return (
        <div>
            <input onChange={e => setNome(e.target.value)} type="text" />
            <StyledButton onClick={Cadastrar}> Salvar</StyledButton>
        </div>
    );
}