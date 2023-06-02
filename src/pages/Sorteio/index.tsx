import React, { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";

export default function Sorteio() {
    const participantes = useListaDeParticipantes();
   
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoDoSorteio();
  
    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        const amigoSecreto = resultado.get(participanteDaVez);

        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(amigoSecreto!);
        }
    }

    return (
        <section>
            <form onSubmit={sortear}>
                <select 
                    required 
                    name="participanteDavez" 
                    id="participanteDavez" 
                    placeholder="selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    );
}