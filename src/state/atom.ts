import { atom } from "recoil";

export const listaParticipantesState = atom({
    key: 'listaParticipantesState',
    default: [] as string[]
});