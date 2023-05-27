import { useRecoilValue } from "recoil"
import { errorState } from "../atom";

export default function useMensagemDeError () {
  const mensagemDeError = useRecoilValue(errorState);
  
  return mensagemDeError;
}