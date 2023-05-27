import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listaParticipantesState } from "../atom";

export default function useAdicionarParticipante(){
  const setLista = useSetRecoilState<string[]>(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setError = useSetRecoilState(errorState)

  return (nomeDoParticipante: string) => {
    if (lista.find((participante) => participante === nomeDoParticipante)) {
      setError('Noms duplicados não são permitidos');

      return;
    }

    return setLista(listaAntiga => [...listaAntiga, nomeDoParticipante])
  }
}