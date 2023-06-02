import { useListaDeParticipantes } from "./useListaDeParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";
import realizarSorteio from "../helpers/realizarSorteio";

export default function useSorteador() {
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
  const participantes = useListaDeParticipantes();

  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
}
