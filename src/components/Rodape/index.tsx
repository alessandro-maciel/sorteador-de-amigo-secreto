import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

export default function Rodape() {
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();

  const iniciar = () => {
    return navigate('/sorteio');
  }

  return (
    <footer>
        <button 
            disabled={participantes.length < 3} 
            onClick={iniciar}
        >Iniciar brincadeira</button>
    </footer>
  );
}