import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

export default function Sorteio() {
    const participantes = useListaDeParticipantes();

    return (
        <section>
            <form>
                <select name="participanteDavez" id="participanteDavez">
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
            </form>
        </section>
    );
}