import React, { useRef, useState } from "react";
import useAdicionarParticipante from "../state/hooks/useAdicionarParticipante";
import useMensagemDeError from "../state/hooks/useMensagemDeError";

export default function Formulario(){
  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarParticipante = useAdicionarParticipante();
  const mensagemDeError = useMensagemDeError();
  
  const submiterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    adicionarParticipante(nome);
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={submiterFormulario}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Insira os nomes dos participantes"
          onChange={(evento) => setNome(evento.target.value)} 
          value={nome}
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeError &&  <p role="alert">{mensagemDeError}</p>}
    </form>
  );
}