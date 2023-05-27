import { useSetRecoilState } from "recoil";
import { listaParticipantesState } from "../atom";

export default function useAdicionarParticipante(){
  const setLista = useSetRecoilState<string[]>(listaParticipantesState);

  return (nomeDoParticipante: string) => {
    return setLista(listaAntiga => [...listaAntiga, nomeDoParticipante])
  }
}